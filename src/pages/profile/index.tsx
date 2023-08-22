import { Box, HStack, Text } from '@chakra-ui/react';
import { Session, User as SupabaseUser } from '@supabase/supabase-js';
import { AuthChangeEvent, Session as SupabaseSession } from '@supabase/supabase-js'
import React, { useEffect,useState } from 'react';

import Layout from '@/components/layout/Layout';
import UserProfile from '@/components/profile/UserProfile';
import SideBar from '@/components/profile/SideBar';

import supabase from '@/config/supabaseClient';
import EditProfile from '@/components/profile/EditProfile';

interface User {
  avatarLink: string;
  id: string;
  email: string;
  created_at: string;
  bio: string;
  matched_with: string[];
  tags: string[];
}

const ProfilePage: React.FC = () => {
  const [toggleEditProfile,setToggleEditProfile] = useState(false)

  interface User {
    avatarLink: string;
    id: string;
    email: string;
    created_at: string;
    bio: string;
    matched_with: string[];
    tags: string[];
  }

  const mockUser = {
    avatarLink: 'images/MSN_image.png',
    id: '123',
    email: 'admin@gmail.com',
    created_at: '06/10/2023',
    bio: 'this is a user bio',
    matched_with: ['123','234'],
    tags: ['music','art','drawing'],
  }
  // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: SupabaseSession | null) => {
  //       if (session) {
  //         getUserData(session.user?.id || '');
  //       }
  //     });
  //   };

  //   fetchData();
  // }, []);

  // const getUserData = async (userId: string) => {
  //   const { data, error } = await supabase
  //     .from('User')
  //     .select('*')
  //     .eq('id', userId)
  //     .single();

  //   if (error) {
  //     console.error('Error fetching user:', error);
  //   } else {
  //     setUser(data);
  //   }
  // };
  const handleToggleEditProfile=()=>{
    setToggleEditProfile(!toggleEditProfile)
  }



  return (
    <Layout>
    <Box>
      <EditProfile isOpen={toggleEditProfile} onClose={handleToggleEditProfile}></EditProfile>
      <HStack gap={'20%'}>

      <SideBar></SideBar>
      <UserProfile user = {mockUser} handleToggleEditProfile={handleToggleEditProfile}></UserProfile>
      
      </HStack>

    </Box>
    </Layout>
  );
};

export default ProfilePage;
