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

interface LinkItemProps {
  name: string;
  category: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "", category: "" }
];

interface TitleProps {
  text: string
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <>
      <Text ml="2" fontSize="3xl" textColor="gray.500">{ text }</Text>
      <hr style={{ borderWidth: '2px' }} />
    </>
  );
}

const Documentation: FC = () => {
  return (
    <Box w="full" h="full">
      <Heading fontSize="5xl">The Practigo Documentation</Heading>
      <Box w="full" h="5vh"></Box>
      <Title text="Mission" />
      <Title text="Installing Go" />
      <Title text="Downloading Practigo" />
      <Title text="Running the Application" />
      <Title text="Other Resources" />
    </Box>
  );
}

const SetupPage: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" w="full" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        LinkItems={LinkItems}
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
          <SidebarContent onClose={onClose} LinkItems={LinkItems} />
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