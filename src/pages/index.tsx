import { Button, Center, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "src/components/Layout";
import TaskList from "src/components/TaskList";
import { Task } from "src/interfaces/Task"; 
interface Props {
  tasks: Task[];
}

export default function Index({ tasks }: Props) {
  const router = useRouter();

  return (
    <Layout>
   {!tasks.length ? (
    <Box>
      <Center paddingTop={4}>
      <h1>No Tasks</h1>
      </Center>
      <Center h='100px' color='black'> 
      <Button onClick={()=> router.push("tasks/new")}>Create A Task</Button>
      </Center>
    </Box>
    ) : (
    <TaskList tasks={tasks} />
    )}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/tasks");
  const tasks = await response.json();

  return {
    props: {
      tasks: tasks,
    }
  }
}