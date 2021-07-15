import React, { FC } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import json from '../public/doc.json'


interface LogoProps {
  mobile: boolean
}

const Logo: FC<LogoProps> = ({ mobile }) => {
  return (
    <>
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" ml={ mobile ? "4" : "-4" }><a href="/">Practigo</a></Text>
    </>
  )

}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent: FC<SidebarProps> = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Logo mobile={false} />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {json.doc.map((link, idx) => (
        <Text ml="5" mb="4" pt="-2" textColor="gray.600" key={idx} onClick={onClose}><a href={"#"+link.id}>{ link.mainTitle }</a></Text>
      ))}
    </Box>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Logo mobile={true} />
    </Flex>
  );
};

export default SidebarContent;
export { MobileNav }