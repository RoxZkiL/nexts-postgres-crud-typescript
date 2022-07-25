import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
    id?: string,
    title: string;
    description: string,
    created_on?: string
}

export function TaskCard({ title, description, created_on }: Props) {
    return (
      <Box p={8} shadow='md' borderWidth='1px' >
        <Heading fontSize='xl'>{title}</Heading>
        {created_on && (
            <Text as='sub'>{new Date(created_on).toLocaleDateString()}</Text>
        )}
        <Text mt={4}>{description}</Text>  
      </Box>
    )
  }