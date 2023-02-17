import React from 'react'

import { Box, HStack, Icon, Text, Flex } from '@chakra-ui/react';
import StarIcon from './Icons/StarIcon';
import FeeIcon from './Icons/FeeIcon';
import SubsrIcon from './Icons/SubsrIcon';

export default function Features() {
  return (
 <Box maxW=  {"800px"}  mx= {{base: " 25px",  lg:"auto"}} mt = "25px" >
    <Flex direction = {{base: "column", md : 'column', lg: "row"}} >
<HStack>
<Icon as= {StarIcon}/>
<Text mb = {"15px"}>30 days money back Guarantee</Text>
</HStack>

<HStack>
<Icon as= {FeeIcon}/>
<Text mb = {"15px"} >No setup fees 100% hassle-free</Text>
</HStack>

<HStack>
<Icon as= {SubsrIcon}/>
<Text mb = {"15px"}  >No monthly subscription Pay once and for all</Text>
</HStack>



</Flex>

 </Box>
  )
}
