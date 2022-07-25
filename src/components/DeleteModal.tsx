import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface Props {
    title: string,
    description: string,
    onConfirm: any,
}

export default function DeleteModal({title, description, onConfirm} : Props) {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Button colorScheme='red' onClick={onOpen}>
        <ArrowForwardIcon/>
    Delete</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {description}
      </ModalBody>
      <ModalFooter>
        <Button variant='outline' colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
        <Button variant='outline' colorScheme='red' onClick={onConfirm}>Delete Task</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  </>
  )
}
