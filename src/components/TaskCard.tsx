import { Box, Heading, Text } from "@chakra-ui/react";
interface Props {
    title: string,
    description: string,
    created_on?: string,
}

export function TaskCard({ title, description, created_on}: Props) {
  return (
      <Box p={4} minWidth="106px" shadow='md' borderWidth='1px' w="100%" borderRadius='lg' cursor="pointer">
        <Heading fontSize='xl'>{title}</Heading>
        {created_on && (
            <Text  as='sub'>{new Date(created_on).toLocaleDateString()}</Text>
        )}
        <Text mt={4}>{description}</Text> 
      </Box>
    )
  }