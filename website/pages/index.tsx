import { NextPage } from 'next'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  SimpleGrid,
  Spacer
} from '@chakra-ui/react';

import Footer from '../components/footer'


interface LandingProps {
  featureRef: any
}

const Landing: FC<LandingProps> = ({ featureRef }) => {
  
  function redirect() {
    featureRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Stack
      textAlign={'center'}
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 10, md: 12 }}
      h="100vh"
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        Practi
        <Text as={'span'} color={'brand.100'} _hover={{ color: 'brand.200'}}>go</Text>
      </Heading>
      <Text color={'gray.500'} maxW={'3xl'}>
        Learn the Go Programming Language in a more <b>Practical Way</b>
      </Text>
      <Stack spacing={6} direction={'row'}>
        <Link href="/setup">
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'brand.100'}
            bg={'brand.100'}
            _hover={{ bg: 'brand.200' }}>
            Get started
          </Button>
        </Link>
        <Button rounded={'full'} px={6} onClick={redirect}>
          Learn more
        </Button>
      </Stack>
      <Flex w={'100%'} h="full" justifyContent="center" alignItems="center" direction="column">
        <TeachingSVG />
        <ChevronDownIcon 
          boxSize="3em" 
          color="gray.500" 
          onClick={redirect} 
          _hover={{ cursor: "pointer" }}
        />
      </Flex>
    </Stack>
  );
}

const TeachingSVG : FC = () => {
  return (
    <Image src="/teaching.svg" width={'350vh'} height={'350vh'} />
  )
}

const Features: FC = () => {
  return (
    <Box bg={'gray.800'} position={'relative'} h="full" px="15">
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 20 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                Learn Go in a New Way
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                Running through hours of textbooks and documentation can be boring.
                Learn Go in a brand new way that is interesting to you.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {features.map((feature) => (
                <Box key={feature.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}
                    fontWeight="bold">
                    {feature.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {feature.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

const features = [
  {
    title: 'Interactive',
    content: (
      <>
        <>Code</> the exercises directly in your favorite text editor/ide.
      </>
    ),
  },
  {
    title: 'Fast',
    content: (
      <>
        <>Run</> through the code and documentation to quickly understand
        the syntax.
      </>
    ),
  },
  {
    title: 'Example',
    content: (
      <>
        <>Learn</> by example. Complete all of the example exercises one 
        by one to learn more about programming and the Go language.
      </>
    ),
  },
  {
    title: 'Simple',
    content: (
      <>
        <>Execute</> only one script to check your code solutions. 
      </>
    ),
  },
];

const GetStarted: FC = () => {
  return (
    <Box w="full" bg="brand.100" py={20}>
      <Flex direction="column" justifyContent="center" alignContent="center" w="full">
        <Heading
          color={'white'}
          mb={5}
          fontSize={{ base: '4xl', md: '6xl' }}
          textAlign="center"
        >
          Get Started with Practigo
        </Heading>
        <Box h="5" />
        <Stack spacing={6} direction={'row'} justifyContent="center">
          <Link href="/setup">
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'brand.100'}
              bg={'black'}
              _hover={{ bg: 'gray.200', textColor: 'black' }}>
              Get started
            </Button>
           </Link>
        </Stack>
      </Flex>
    </Box>
  );
}

const Index: NextPage = () => {
  const featureRef = useRef(null)

  return (
    <>
      <Container maxW={'5xl'}>
        <Landing featureRef={featureRef} />
      </Container>
      <div ref={featureRef}><Features /></div>
      <GetStarted />
      <Footer />
    </>
  );
}

export default Index;