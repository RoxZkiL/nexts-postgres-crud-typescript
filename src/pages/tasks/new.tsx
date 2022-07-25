import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Container,Input,Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import Layout from "src/components/Layout";
import { Task } from "src/interfaces/Task";

export default function New() {
    const router = useRouter();
    const [tasks, setTasks] = useState({
        title: "",
        description: "",
    })

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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          await createTask(tasks);
          setTasks({
            title: "",
            description: "",
          })
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
                maxW='md'>
                    <form onSubmit={handleSubmit}>
                    <Input 
                    placeholder='Title' 
                    size="md"                
                    type="text"
                    name="title"
                    value={tasks.title} 
                    onChange={(e) => handleChange(e)}/>
                    <Textarea 
                    placeholder="Description" 
                    size="md" 
                    rows={2}
                    name="description"
                    value={tasks.description} 
                    onChange={(e) => handleChange(e)}/>
                    <Button type="submit">
                        <ArrowForwardIcon/>Save
                    </Button>
                    </form>
                </Box>
            </Container>
        </Layout>
    )
}