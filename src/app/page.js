'use client'
// import Image from "next/image";
import { Link } from '@chakra-ui/next-js'
import { Box, Center, Flex, Image } from '@chakra-ui/react';
export default function Home() {
  return (
    <Box h={'100vh'} w={'full'}>
      <Flex h={'full'} justify={'center'} alignItems={'center'} >
        <Image h={'120px'} src='/logo.png' />
      </Flex>

    </Box>
  );
}
