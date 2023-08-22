'use client'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  ModalProps,
  Modal,
  ModalContent,
  ModalOverlay,
  Textarea,
  Select
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useState } from 'react'

const Form = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
        Editing Profile
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight="normal">
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight="normal">
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="Last name" />
        </FormControl>

      </Flex>
      <Flex>
      <FormControl mt="2%" mr="5%">
          <FormLabel htmlFor="Gender" fontWeight="normal">
            Gender
          </FormLabel>
          <Select id='Gender' name='Gender' placeholder='select options'>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </Select>
         
        </FormControl>

        <FormControl mt="2%">
        <FormLabel htmlFor="graduationYear" fontWeight="normal">
          Graduation Year
        </FormLabel>
        <Input id="graduationYear" placeholder='Graduation year'/>
      </FormControl>
      </Flex>
      

      <FormControl>
        <FormLabel htmlFor="password" fontWeight="normal" mt="5%">
          Self Description
        </FormLabel>
        <InputGroup size="md">
          <Input
            placeholder="Please enter a short self-introduction"
          />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight="normal" mt="10%">
          Bio
        </FormLabel>
        <InputGroup size="md">
          <Textarea
            placeholder="Please enter your bio here"
          />
        </InputGroup>
      </FormControl>

    </>
  )
}


type EditProfileProps = {
  isOpen: ModalProps['isOpen'];
  onClose: ModalProps['onClose'];
};


const EditProfile:React.FC<EditProfileProps> = ({ isOpen, onClose }) => {
  const toast = useToast()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
       <ModalOverlay>
        <ModalContent shadow="10px 10px 30px rgba(0,0,0,0.3)" rounded={'lg'} p={10}>

     
          <Form></Form>
          <Box alignSelf = "end" alignItems={'end'}>
          <Button
                w="7rem"
                colorScheme="blue"
                variant="solid"
                mt={5}
                onClick={() => {
                  toast({
                    title: 'Profile Modified',
                    position:"top",
                    description: "We've updated your account profile information.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                  onClose();
                }}>
                Save
              </Button>
          </Box>
  

      </ModalContent>
      </ModalOverlay>
      
    </Modal>
  )
}


export default EditProfile