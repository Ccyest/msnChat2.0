import { useState } from 'react';
import { Box, Button, VStack, Text, Input, Heading } from '@chakra-ui/react';

const ChatSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box display="flex">
      {/* Sidebar */}
      <VStack
        width={isOpen ? '250px' : '0'}
        transition="all 0.3s"
        overflow="hidden"
        boxShadow="md"
        height="100vh"
        borderRight="1px solid #ddd"
      >
        <Button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Open'}
        </Button>
        <Heading size="md">Create your account</Heading>
        <Input placeholder="Type here..." />
        <Button>Save</Button>
      </VStack>

      {/* Main content */}
      <Box flex="1" p={5}>
        <Text>Your main content goes here</Text>
      </Box>
    </Box>
  );
};

export default ChatSideBar;
