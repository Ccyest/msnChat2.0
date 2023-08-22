import { VStack } from '@chakra-ui/react';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ChatSideBar from '@/components/chat/chatSideBar';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  //const seoTitle = ``;

  return (
    <Layout>
      <main>
        <section className='bg-white'>
          <span>Chat Page</span>
          <ChatSideBar></ChatSideBar>
        </section>
      </main>
    </Layout>
  );
};
