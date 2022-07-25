import React from 'react'
import {
    Flex,
    Box,
    Spacer,
    Heading,
    Button,
    ButtonGroup
  } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function NavBar() {
    const router = useRouter();
  return (
    <Flex backgroundColor="black" minWidth='430px' alignItems='center' gap='2' h={20}>
  <Box p='2' color="white" >
    <Heading paddingLeft={4} cursor="pointer" size='md' onClick={() => router.push("/")}>Task App</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2' paddingRight={6}>
    <Button backgroundColor="white" colorScheme="gray" color="black" variant='outline' onClick={() => router.push("/tasks/new")}>New Task</Button>
  </ButtonGroup>
</Flex>
  )
}
