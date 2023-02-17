import React from "react";
import { Box, Heading, Text, } from "@chakra-ui/react";

export default function Header() {
  return (
    
    <Box textAlign ={{base: "left", md: "left", lg: "center"}} pl= "15px"  bg={"#6B46C1"} pt ="90px" pb= "250px" color = "white" >
      <Heading pt= "10px"> Simple pricing for your business </Heading>
      <Text mt = {"5px"}>Plans that are carefully crafted to suit your business.</Text>
    </Box>



  );
}
