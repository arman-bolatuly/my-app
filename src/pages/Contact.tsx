import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
} from 'react-icons/md';
import { useState, useEffect } from "react"
import { expressService } from '../axiosConfig';


const initialState = {
  nick_name: "",
  phone_number: "",
  email: "",
  //message: "",
}

export default function Contact() {
  const [bell, setBell] = useState(initialState);
  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const newBell = {
      nick_name: bell.nick_name,
      phone_number: bell.phone_number,
      email: bell.email,
      //message: bell.message,
    }
    const res = await expressService.post("/client_information", newBell)
    setBell(initialState);
  }

  function handleChange(e: any) {
    setBell((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <Container bgGradient={useColorModeValue(
      'radial(orange.600 1px, transparent 1px)',
      'radial(orange.300 1px, transparent 1px)'
    )} maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +7(707)7663169
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        apptime@apptime.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Astana, Kazakhstan
                      </Button>
                    </VStack>
                  </Box>
                  {/* <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      // icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      //icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      //icon={<BsDiscord size="28px" />}
                    />
                  </HStack> */}
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl onSubmit={handleSubmit}>
                          <FormLabel>Your Name</FormLabel>
                          <Input type="text" name="nick_name" value={bell.nick_name} onChange={handleChange} borderColor="#E0E1E7"/>
                          <FormLabel>Your Phone</FormLabel>
                          <Input type="text" name="phone_number" value={bell.phone_number} onChange={handleChange} borderColor="#E0E1E7"/>
                          <FormLabel>Mail</FormLabel>
                          <Input type="email" name="email" value={bell.email} onChange={handleChange} borderColor="#E0E1E7"/>
                          {/* <FormLabel>Message</FormLabel>
                          <textarea placeholder="message" name="message" value={bell.message} onChange={handleChange}/> */}
                          <Button type="submit">Send Message</Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

// borderColor="gray.300"
// _hover={{
//   borderRadius: 'gray.300',
// }}