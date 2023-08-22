import {
  Avatar,
  AvatarBadge,
  Badge,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useRef,useState } from 'react'

function SideBar() {
  const [userProfile, setUserProfile] = useState<string|null>(null);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const profileImage = useRef<HTMLInputElement>(null);

  const openChooseImage = () => {
   if (profileImage.current){
    profileImage.current.click()
   }
  }

  const changeProfileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
    const selected = event.target.files ? event.target.files[0] : null;

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
            setUserProfile(reader.result);
        }
    };
      return reader.readAsDataURL(selected)
    }
    else{
      onOpen()
    }
  }

  return (
    <VStack spacing={7} py={5} borderBottomWidth={1} borderColor="brand.dark">
      <Avatar
        size="2xl"
        name="Tim Cook"
        cursor="pointer"
        onClick={openChooseImage}
        src={userProfile ? userProfile : 'images/MSN_image.png'}
      >
        <AvatarBadge bg="blue.300" boxSize="1em">
          <svg width="0.4em" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
            />
          </svg>
        </AvatarBadge>
      </Avatar>
      <input
        hidden
        type="file"
        ref={profileImage}
        onChange={changeProfileImage}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Something went wrong</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>File not supported!</Text>
            <HStack mt={1}>
              <Text color="brand.cadet" fontSize="sm">
                Supported types:
              </Text>
              <Badge colorScheme="blue">PNG</Badge>
              <Badge colorScheme="blue">JPG</Badge>
              <Badge colorScheme="blue">JPEG</Badge>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <VStack spacing={2}>
        <Heading as="h3" fontSize="2xl" color="brand.dark">
          Tim Cook
        </Heading>
        <Text color="brand.gray">
          CEO of Apple
        </Text>
      </VStack>
    </VStack>
  )
}

export default SideBar