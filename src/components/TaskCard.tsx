import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface Props {
    id?: string,
    title: string;
    description: string,
    created_on?: string
}

export function TaskCard({ id, title, description, created_on }: Props) {
    const router = useRouter();
  return (
      <Box p={4} minWidth="106px" shadow='md' borderWidth='1px' w="100%" borderRadius='lg' onClick={()=> router.push(`/task/edit/${id}`)} cursor="pointer">
        <Heading fontSize='xl'>{title}</Heading>
        {created_on && (
            <Text  as='sub'>{new Date(created_on).toLocaleDateString()}</Text>
        )}
        <Text mt={4}>{description}</Text> 
      </Box>
    )
  }