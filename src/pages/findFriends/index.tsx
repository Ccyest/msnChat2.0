import { VStack } from '@chakra-ui/react';
import * as React from 'react';

import IndividualProfile from '@/components/findFriends/IndividualProfile';
import Layout from '@/components/layout/Layout';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  //const seoTitle = ``;

  return (
    <Layout>
      <main>
        <section className='bg-white'>
          <span>Find Friends</span>
          <VStack>
            <IndividualProfile></IndividualProfile>
            <IndividualProfile></IndividualProfile>
            <IndividualProfile></IndividualProfile>
          </VStack>
        </section>
      </main>
    </Layout>
  );
};
