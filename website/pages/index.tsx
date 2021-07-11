import { NextPage } from 'next'
import Image from 'next/image'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';


const SVG = () => {
  return (
    <Image src="/teaching.svg" width={'300vh'} height={'300vh'} />
  )
}

const Index: NextPage = () => {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 12 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Practi
          <Text as={'span'} color={'brand.100'} _hover={{ color: 'brand.200'}}>go</Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'brand.100'}
            bg={'brand.100'}
            _hover={{ bg: 'brand.200' }}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={'100%'} h="full" justifyContent="center" alignItems="center" direction="column">
          <SVG />
          <ChevronDownIcon boxSize="3em" color="gray.500" mt={{ base: 35, md:0 }} />
        </Flex>
      </Stack>
    </Container>
  );
}

export default Index;