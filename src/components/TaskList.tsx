import { SimpleGrid, Link, Box, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react'
import { Task } from 'src/interfaces/Task'
interface Props {
    tasks: Task[];
}

export default function TaskList({ tasks }: Props) {
  const router = useRouter();
  return (
    <SimpleGrid spacing='10px' columns={4} padding={4} minWidth="400px">    
                {tasks.map(task => (       
      <Box p={4} minWidth="106px" shadow='md' borderWidth='1px' w="100%" borderRadius='lg' cursor="pointer" key={task.id} onClick={()=>router.push(`/tasks/edit/${task.id}`)}>
        <Heading fontSize='xl'>{task.title}</Heading>
            <Text  as='sub'>{task.created_on}</Text>
        <Text mt={4}>{task.description}</Text>
        </Box> 
                ))}
    </SimpleGrid>
  )
}
