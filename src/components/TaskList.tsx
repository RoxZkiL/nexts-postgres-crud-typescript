import { HStack, SimpleGrid, Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import { Task } from 'src/interfaces/Task'
import { TaskCard } from './TaskCard';


interface Props {
    tasks: Task[];
}

export default function TaskList({ tasks }: Props) {
  return (
    <SimpleGrid spacing='10px' columns={4} padding={2} minWidth="400px">    
                {tasks.map(task => (
     <TaskCard key={task.id}
     title={task.title}
     created_on={task.created_on}
     description={task.description}
   />
                ))}
    </SimpleGrid>
  )
}
