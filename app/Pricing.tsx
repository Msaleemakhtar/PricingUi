import {
  Box,
  Flex,
  flexbox,
  Text,
  Heading,
  Button,
  HStack,
  Icon,
 
} from "@chakra-ui/react";
import React from "react";
import CheckMarkIcon from './Icons/CheckMarkIcon';

export default function Pricing() {
  return (
    // container box

    <Box bg = {"white"} maxW = {"950px"}  m= "auto"  mt = "-150px" borderRadius={"16px"} overflow = {"hidden"}
    boxShadow=  {"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"}>
      <Flex direction = {{base: "column",  md : 'column', lg: "row"}}>
        {/* left part of flex container */}
        <Box bg={"#F0EAFB"} p="60px" text-align={{base: "center", lg : "center"} } mx = {{base: "20px", lg: "auto"}}>
          <Text color={"#171923"} font-weight={"800"} fontSize={"32px"}>
            Premium PRO
          </Text>
          <Heading fontSize={"60px"}>$329</Heading>
          <Text fontSize={"18px"}>billed just once</Text>
          <Button mr = {"30px"} mt={"20px"} w={"200px"} bg={"#805AD5"} color={"white"}>
            Get Started
          </Button>
        </Box>

        {/* right part of flex container */}
        <Box pt="50px" pl="50px" bg={"white"} pr = {"10px"}>
            <Text mb = {"10px"}>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <HStack mb = {"20px"}>
             <Icon as = {CheckMarkIcon} />
            <Text>International calling and messaging API</Text>
            </HStack>

            <HStack mb = {"20px"}>
             <Icon as = {CheckMarkIcon} />
            <Text>Additional phone numbers</Text>
            </HStack>

            <HStack mb = {"20px"}>
             <Icon as = {CheckMarkIcon} />
            <Text>Automated messages via Zapier</Text>
            </HStack>

            <HStack mb = {"20px"}>
             <Icon as = {CheckMarkIcon} /> 
            <Text>24/7 support and consulting</Text>
            </HStack>
          
        </Box>
      </Flex>
    </Box>
  );
}
