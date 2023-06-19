import { Avatar, Box, Button, Tag, Text } from '@chakra-ui/react';
import React from 'react';

const avatarLink = 'images/MSN_image.png';

const IndividualProfile: React.FC = () => {
  return (
    <Box display='flex' alignItems='flex-start'>
      <Box flex={1} display='flex' flexDirection='column' alignItems='center'>
        <Avatar src={avatarLink} size='lg'></Avatar>
        <Button onClick={() => alert('Button is clicked!!!!')}>
          Click Me!
        </Button>
      </Box>
      <Box flex={3}>
        <Box display='flex' gap={2} mb={2}>
          <Tag>Tag1</Tag>
        </Box>
        <Text>
          This is the bio text. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Text>
      </Box>
    </Box>
  );
};

export default IndividualProfile;
