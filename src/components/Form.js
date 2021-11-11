import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Container, Heading, Stack,Box } from "@chakra-ui/layout";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
export default function Form() {
  let history = useNavigate();
    const [value, setvalue] = useState({name:"",email:"",password:""});
    const change=(e)=>{
        setvalue({...value,[e.target.name]:e.target.value});
      }
      const sendData =async ({name,email,password})=>{
        await fetch("https://backend-apii.herokuapp.com/api/submit",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({name,email,password})
        })
        .then(async(response)=>{
          const check = await response.json()
          alert('Submit successfully')
          console.log(check)
          history('/');
          
        })
        .catch(error=>{
          alert('email already exist')
          console.log(error.message)
        })
      }
      const handleClick = ()=>{
        const {name,email,password} = value;
        sendData({name,email,password});
      }
  return (
    <>
    
      <Container maxW="2xl">
        <Stack  p={10}> 
          <Heading align="center">Form</Heading>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input onChange={change} placeholder="Enter your name" name="name"/>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" onChange={change} placeholder="Enter your email" name="email"/>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>password</FormLabel>
            <Input type="password" onChange={change} placeholder="Enter your password" name="password"/>
          </FormControl>
          <Box>
          <Button colorScheme="blue" onClick={handleClick}>
              Submit
          </Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
