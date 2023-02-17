"use client"
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Header';
import Pricing from './Pricing';
import Features from './Features';



export default function Home() {
  return (
    
     <ChakraProvider>
       <Header/>
       <Pricing/>
       <Features/>
     
    </ChakraProvider>
  
    
  )
}
