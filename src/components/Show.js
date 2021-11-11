import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Text,
  HStack,
  Heading,
  Box,
  Container,
  Stack,
} from "@chakra-ui/react";
import { useNavigate,Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
function Show() {
  let navigate = useNavigate();
  const handleClick = (id)=>{
    navigate(`/update/${id}`)
  }
  const [Data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://backend-apii.herokuapp.com/api/receive"
    );
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Container maxW="2xl">
        <Stack p={10}>
          <Box><Button><Link to="/new">New</Link></Button></Box>
          {Data.map((data) => {
            return (
              <>
              
                <HStack
                  flexDirection="column"
                  align="left"
                  border="1px"
                  borderRadius="lg"
                  p={4}
                >
                  <Heading size="md">Name: {data.name}</Heading>
                  <Box
                    display={{lg:"flex"}}
                    justifyContent="space-between"
                    align="left"
                  >
                    <Text>Email:{data.email}</Text>
                    <Button onClick={()=>{handleClick(data._id)}}>Edit</Button>
                  </Box>
                </HStack>
              </>
            );
          })}
        </Stack>
      </Container>
    </>
  );
}
export default Show;
