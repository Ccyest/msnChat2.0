import {
  Box,
  chakra,
  Button,
  Container,
  Link,
  SimpleGrid,
  Stack,
  VStack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { FormEvent } from 'react';
import { useState } from 'react';

import supabase from '@/config/supabaseClient';
import { space } from 'postcss/lib/list';



// eslint-disable-next-line import/no-anonymous-default-export
const MagicLinkForm: React.FC = () =>  {
  //const seoTitle = ``;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState('');

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert(error.message);
    } else {
      alert('Check your email for the login link!');
    }
    setLoading(false);
  };

  return (
    <main>
      <Box
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      flexDirection="column" 
      height="100vh" 
      fontSize="xl" 
      fontWeight="500"
      >
           <Text fontSize="xxx-large" mb="4">
            Log In
          </Text>
      
        <div className='row flex-center flex'>
          <VStack 
          spacing={5}
        align="left">

            <p className='description'>
              Sign in via magic link with your email below
            </p>
            <form className='form-widget' onSubmit={handleLogin}>
              <div>
                <input
                  className='inputField'
                  type='email'
                  placeholder='Your email'
                  value={email}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Button 
                type = "submit"
                className='button block' 
                disabled={loading} 
                bg={useColorModeValue('blue.100', 'whiteAlpha.100')} 
                padding={2} mt={2}>
                  {loading ? (
                    <span>Loading</span>
                  ) : (
                    <span>Send magic link</span>
                  )}
                </Button>
              </div>
            </form>
          </VStack>
        </div>
      </Box>
      </main>
  );
};

export default MagicLinkForm