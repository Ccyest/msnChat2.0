// eslint-disable-next-line import/no-anonymous-default-export
import { SimpleGrid, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import IndividualProfile from '@/components/match/IndividualProfile';
import Postcard from '@/components/match/Postcard';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  //const seoTitle = ``;=
  const [toggleDrawer,setToggleDrawer] = useState(false)

  const handleToggleDrawer = () =>{
    setToggleDrawer(!toggleDrawer)
    return
  }

  return (
    <Layout>
      <main>
        <section className='bg-white'>
          <span>Match Page</span>

          <VStack>
          <Postcard isOpen={toggleDrawer} onClose={handleToggleDrawer}></Postcard>
          <SimpleGrid columns={[2,3,4]} spacing={50}>
              <IndividualProfile handleToggleDrawer={handleToggleDrawer} />
              <IndividualProfile handleToggleDrawer={handleToggleDrawer} />
              <IndividualProfile handleToggleDrawer={handleToggleDrawer} />
              <IndividualProfile handleToggleDrawer={handleToggleDrawer} />
              <IndividualProfile handleToggleDrawer={handleToggleDrawer} />
              <IndividualProfile handleToggleDrawer={handleToggleDrawer} />
            </SimpleGrid>
          </VStack>
        </section>
      </main>
    </Layout>
  );
};
