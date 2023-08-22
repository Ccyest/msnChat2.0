import { VStack } from '@chakra-ui/react';
import * as React from 'react';

import ChatSideBar from '@/components/chat/ChatSideBar';
import Layout from '@/components/layout/Layout';

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
