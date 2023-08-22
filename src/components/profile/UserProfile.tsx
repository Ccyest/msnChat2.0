import {EditIcon} from "@chakra-ui/icons";
import { Avatar, border, Box, Flex, FormControl, FormLabel, Grid, IconButton, Input, keyframes,  Select,Tag, Text } from '@chakra-ui/react';
import { start } from 'nprogress';

import UserTag from '@/components/match/UserTag';

interface UserProfileProps {
  user: {
    avatarLink: string;
    id: string;
    email: string;
    created_at: string;
    bio: string;
    matched_with: string[];
    tags: string[];
  };
  handleToggleEditProfile: () => void;
  
}


const UserProfile: React.FC<UserProfileProps> =({user,handleToggleEditProfile})=> {
  const tags = ['django','vue','react','typescript','node.js','next.js','prisma']
  return (
    <Box display='flex' flexDirection={'column'} gap={'5'}>
      <Box display={'flex'} alignSelf={'end'} alignItems={'flex-end'} mr={'50'} flexDirection={'column'} >

        <IconButton aria-label='Edit Profile' size={'lg'} icon = {<EditIcon boxSize="30px" ></EditIcon>} onClick={handleToggleEditProfile}/>

        <Text fontWeight='bold' mr={'-4'}>Edit Profile</Text>
      </Box>
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <Text>Tim</Text>
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Text>Cook</Text>
      </FormControl>
      <FormControl id="gender">
        <FormLabel>Gender</FormLabel>
        <Text>Male</Text>
      </FormControl>
      <FormControl id="graduationYear">
        <FormLabel>Graduation Year</FormLabel>
        <Text>2025</Text>
      </FormControl>
      <FormControl id="description">
        <FormLabel>Self Description</FormLabel>
        <Text>I am the admin of this website</Text>
      </FormControl>
      <FormControl id="tags">
        <FormLabel>Tags</FormLabel>
        {tags.map((content,index)=>(<UserTag key={index} content={content}></UserTag>))}
      </FormControl>
    </Grid>
    <FormControl>
      <FormLabel>Bio</FormLabel>
      <Text>This is the user bio: aalalalalalsdfuikofg;sThis is the user bio: aalalalalalsdfuikofg;sThis is the user bio: aalalalalalsdfuikofg;sThis is the user bio: aalalalalalsdfuikofg;sThis is the user bio: aalalalalalsdfuikofg;sThis is the user bio: aalalalalalsdfuikofg;s</Text>
    </FormControl>
    </Box>
  )
}

export default UserProfile