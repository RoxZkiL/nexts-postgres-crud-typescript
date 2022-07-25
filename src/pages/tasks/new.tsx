import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Container,Input,Textarea, Text, useDisclosure} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import DeleteModal from "src/components/DeleteModal";
import Layout from "src/components/Layout";
import { Task } from "src/interfaces/Task";

export default function New() {
    const router = useRouter();

    const [tasks, setTasks] = useState({
        title: "",
        description: "",
    })

    const loadTask = async(id: string) => {
      const response =  await fetch("http://localhost:3000/api/tasks/" + id);
      const task = await response.json();
      setTasks({title: task.title, description: task.description})
    }

    const handleDelete = async(id: string | string[] | undefined) => {
        try {
            await fetch("http://localhost:3000/api/tasks/" + id, {
                method: "DELETE",
            });
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        if(typeof router.query.id === "string") {
            loadTask(router.query.id);
        }
    }, [router.query])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTasks({
            ...tasks,
            [e.target.name]: e.target.value,
        })
    }

    const createTask = async(tasks: Task) => {
        await fetch("http://localhost:3000/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tasks)
        });
    }

    const updateTask = async (id:string, task: Task) => {
        await fetch("http://localhost:3000/api/tasks/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if(typeof router.query.id === "string") {
                updateTask(router.query.id, tasks)
            } else {
                await createTask(tasks);
                setTasks({
                    title: "",
                    description: "",
                })
            }
            router.push("/");
        } catch (error) {
          console.log(error);  
        } 
    }

    return(
        <Layout>
            <Container 
            paddingTop={4}
            maxW='md'>
                <Box 
                padding='4' 
                border="1px solid black" 
                color='black' 
                maxW='md'
                borderRadius='lg'
                >
                    <form onSubmit={handleSubmit}>
                        <Text as="b" paddingLeft={1}>Title:</Text>
                    <Input 
                    placeholder='Title' 
                    size="md"                
                    type="text"
                    name="title"
                    value={tasks.title} 
                    onChange={(e) => handleChange(e)}/>
                    <Text as="b" paddingLeft={1}>Description:</Text>
                    <Textarea 
                    placeholder="Description" 
                    size="md" 
                    rows={2}
                    name="description"
                    value={tasks.description} 
                    onChange={(e) => handleChange(e)}/>
                    {
                        router.query.id ? (
                        <Center paddingTop={4}>  
                            <Button colorScheme='blue' type="submit"
                            marginRight={4}
                            >
                            <ArrowForwardIcon/>
                                Update</Button>
                                <DeleteModal 
                                    title="Delete a task "
                                    description={"Are you sure you want to delete this task?" + " " + router.query.id}
                                    onConfirm={() => handleDelete(router.query.id)}
                                    />
                        </Center>  
                        ) : (
                        <Center paddingTop={2}>
                            <Button type="submit"
                            >
                            <ArrowForwardIcon/>Save
                            </Button>
                        </Center> 
                        )
                    }
                    </form>
                </Box>
            </Container>
        </Layout>
    )
}