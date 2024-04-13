import { Box, Container, Stack, Text, Image, useColorModeValue } from '@chakra-ui/react';
import logo from './../../Assets/logos.png';

export default function Footer() {
  return (
    <Box
      as="footer"
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt="auto"
      py={4}
    >
      <Container
        textAlign={'center'}
        as={Stack}
        maxW={'6xl'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        h="100%" // Set the height to 100%
        d="flex"
        flexDir="column"
      >
        <Image style={{ height: '44px' }} src={logo} alt="logo" />
        <Text fontSize={15} fontWeight={'bold'}>
          © 2023 Resume Builder, build with love of students of SVKM's DJ sanghvi ❤️
        </Text>
        <Stack direction={'row'} spacing={6}></Stack>
      </Container>
    </Box>
  );
}
