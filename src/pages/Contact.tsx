import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
} from 'react-icons/md';
import { useState } from "react"
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
    console.log(newBell);
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
            <Text fontSize={30} display="flex" justifyContent="center" mb="5">Мы хотели бы услышать от вас</Text>
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
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <form onSubmit={handleSubmit}>
                          <FormLabel>Your Name</FormLabel>
                          {/* borderColor="#E0E1E7" */}
                          <input type="text" name="nick_name" value={bell.nick_name} onChange={handleChange} style={{borderColor:'#E0E1E7', }}/>
                          <FormLabel>Your Phone</FormLabel>
                          <input type="text" name="phone_number" value={bell.phone_number} onChange={handleChange}/>
                          <FormLabel>Mail</FormLabel>
                          <input type="email" name="email" value={bell.email} onChange={handleChange}/><br />
                          {/* <FormLabel>Message</FormLabel>
                          <textarea placeholder="message" name="message" value={bell.message} onChange={handleChange}/> */}
                          <button type="submit">Send Message</button>
                      </form>
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