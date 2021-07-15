import { NextPage } from 'next'
import { FC } from 'react'
import { 
  Text, 
  Box, 
  Drawer, 
  Heading,
  DrawerContent, 
  useDisclosure, 
  useColorModeValue
} from '@chakra-ui/react'
import SidebarContent, { MobileNav } from '../components/sidebar'
import json from '../public/doc.json'

interface LinkItemProps {
  name: string;
  category: string;
  id: string
}

interface TitleProps {
  text: string
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <>
      <Text ml="2" fontSize="3xl" textColor="gray.500" shadow="sm">{ text }</Text>
      <hr style={{ borderWidth: '2px' }} />
    </>
  );
}

const Section: FC = () => {
  return (
    <>
      { json.doc.map((cat, idx) => {
          return (
            <div key={idx} id={cat.id}>
              <Title text={cat.mainTitle} />
              <Box w="full" h="full" pr="10" ml="2" my="2" mb="16">
                <Text pr="5" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{__html: cat.text}}></Text>
              </Box>
            </div>
          );
      }) }
    </>    
  );
}

const Documentation: FC = () => {
  return (
    <Box w="full" h="full">
      <Heading fontSize="5xl" textShadow="-1.5px 1.5px #999">The Practigo Documentation</Heading>
      <Box w="full" h="5vh"></Box>
      <Section />
    </Box>
  );
}

const SetupPage: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" w="full" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Documentation />
      </Box>
    </Box>
  );
}

export default SetupPage;