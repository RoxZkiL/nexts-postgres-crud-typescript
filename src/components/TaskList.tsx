import { HStack } from '@chakra-ui/react';
import React from 'react'
import { Task } from 'src/interfaces/Task'
import { TaskCard } from './TaskCard';


interface Props {
    tasks: Task[];
}

export default function TaskList({ tasks }: Props) {
  return (
    <HStack spacing={8} padding={4}>     
                {tasks.map(task => (
     <TaskCard key={task.id}
       title={task.title}
       created_on={task.created_on}
       description={task.description}
     />
                ))}
    </HStack>
  )
}
