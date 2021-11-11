import React from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Container, Heading, Stack, Box } from "@chakra-ui/layout";
import { useState } from "react";
import { useLocation,useNavigate } from "react-router";

export default function Update() {
    const navigate = useNavigate();
  const [value, setvalue] = useState({ name: "", email: "", password: "" });
  const change = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.slice(8));
  const id = location.pathname.slice(8);
  const sendData =async ({name,email,password})=>{
    await fetch(`https://backend-apii.herokuapp.com/api/update/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,password})
    })
    .then(async(response)=>{
      const check = await response.json()
      console.log(check)
      alert('Edit successfully')
      navigate('/');
      
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
    <div>
      <Container maxW="2xl">
        <Stack p={10}>
          <Heading align="center">Update</Heading>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              onChange={change}
              placeholder="Enter your name"
              name="name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              onChange={change}
              placeholder="Enter your email"
              name="email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>password</FormLabel>
            <Input
              type="password"
              onChange={change}
              placeholder="Enter your password"
              name="password"
            />
          </FormControl>
          <Box>
            <Button colorScheme="blue" onClick={handleClick}>
              Update
            </Button>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
