import {Stack,Heading,Box, HStack,Text,Icon} from '@chakra-ui/react'
import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { BsArrowsAngleContract } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import {Link} from 'react-router-dom';


const Sidenav = () => {

const navLink= [

  {
    icon:BiSolidDashboard,
    text:"Dashboard",
    link:"/",

  },

  {
    icon: BsArrowsAngleContract,
    text:"Transactions",
     link:"/transactions",

  },
];


  return (

    <Stack bg="white" justify="space-between"  boxShadow={{base:"none", lg:"sm"}} h="100vh" w={{base:"full", lg:"16rem"}} >
<Box>
    <Heading as="h1" fontSize="20px" textAlign="center" mt="6" pt="3.5rem" color="#5F00D9">@CryptoDashboard</Heading>

    <Box mt="6" mx="3">
{
     navLink.map((nav)=>(

      <Link to={nav.link} key={nav.text} >
    
    <HStack  borderRadius="10px" px="4" py="3" color="#797E82" _hover={{bg:"#F3F3F7", color:"#171717"}}>
      <Icon as={nav.icon}/>
      <Text fontSize="16px" fontWeight="medium">{nav.text}</Text>
    </HStack>

    </Link>

     ))
}
</Box>

    </Box>



<Box mt="6" mx="3" mb="6">
<Link to="/support">
        <HStack  borderRadius="10px" px="4" py="3" color="#797E82" _hover={{bg:"#F3F3F7", color:"#171717"}}>
      <Icon as={BiSupport}/>
      <Text fontSize="16px" fontWeight="medium">Support</Text>
    </HStack>
</Link>
 </Box>   

    </Stack>
  )
}

export default Sidenav
