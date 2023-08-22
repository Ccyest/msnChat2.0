import { Avatar, Box, Drawer, DrawerContent,DrawerOverlay, DrawerProps, Tag, Text } from '@chakra-ui/react';
import React from 'react';
const avatarLink = 'images/MSN_image.png';


type PostcardProps = {
  isOpen: DrawerProps['isOpen'];
  onClose: DrawerProps['onClose'];
};



const Postcard: React.FC<PostcardProps> = ({ isOpen, onClose }) => {


  return(
    <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" >
       <DrawerOverlay>
       <DrawerContent width={"40%"} mx="auto" overflow={"scroll"}>
    <Box display='flex' alignItems='center' flexDirection={'column'} margin={10} >

        <Avatar src={avatarLink} width='100%' height='50%'></Avatar>
        <Text fontSize={"xx-large"}>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.
While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs.</Text>

        <Box display={'flex'} alignItems={'center'} flexDirection={'row'} mb={'10px'}>
          <Tag size = {'2xl'} background='inherit'>Tag1</Tag>

        </Box>

    </Box>
 
    </DrawerContent>
    </DrawerOverlay>
    </Drawer>
  )

}

export default Postcard