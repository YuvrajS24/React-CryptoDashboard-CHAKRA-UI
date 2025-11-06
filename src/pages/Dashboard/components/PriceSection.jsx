import { HStack ,Stack,Text,Icon,Button,Flex,Image,Tabs} from "@chakra-ui/react"
import {CustomCard} from "../../../chakra/CustomCard"

import React from 'react'
import { BsArrowUpRight } from "react-icons/bs"
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const PriceSection = () => {

 
    const timestamps = ["7:15PM","12:55AM","6:35AM","12:15PM","5:55PM"];


  return (
    <CustomCard boxShadow="sm" w="full" >
 <Flex justify="space-between" align={{base:"center",xl:"start"}} flexDir={{base:"column",sm:"row",md:"row",lg:"row"}} 
   gap={{base:3,md:6}}>



     <Stack justify="center" textAlign={{base:"center",xl:"left"}} >
       
       <HStack color="black.80" justify={{base:"center",sm:"flex-start",md:"flext-start",lg:"flex-start",xl:"flex-start"}}>
        <Text fontSize={{base:"md",md:"md",lg:"md"}}>Current Price</Text>
       </HStack>

       <HStack justify={{base:"center",xl:"flex-start"}}>
        <Text textStyle="h2" fontWeight="medium" >₹26,670.25</Text>

        <HStack fontWeight="medium" color="green.solid">
         <Icon as={BsArrowUpRight}/>
         <Text fontSize={{base:"sm",md:"md",lg:"md"}}>0.04%</Text>
        </HStack>
       </HStack>

     </Stack>


       <HStack justify={{base:"center",xl:"flex-end"}} gap={{base:3,md:4}}  >
     
       <Button   rounded={7}  bg="purple.500" w={{base:"auto",sm:"auto"}} maxW={{base:"75px",sm:"auto",md:"84px", lg:"84px"}} ><Icon as={AiFillPlusCircle}/>Buy</Button>
       <Button    rounded={7} bg="purple.500" w={{base:"auto",sm:"auto"}} maxW={{base:"75px",sm:"auto",md:"84px",lg:"84px"}}><Icon as={AiOutlineMinusCircle}/>Sell</Button>
     
       </HStack>
</Flex>

<Tabs.Root size="sm"  defaultValue="1H">

<Flex justify="end" >
  <Tabs.List mt={{base:"13px",sm:"5px",md:"5px",lg:"5px",xl:"5px"}} bg="#F3F3F7" p={{ base: "2px", md: "3px" }} borderRadius="md">

      {
        ["1H","1D","1W","1M"].map((tab)=>(

                <Tabs.Trigger key={tab} _selected={{bg:"white"}} value={tab} fontSize={{ base: "sm", md: "sm" }} p={{base:"4px",md:"6px",lg:"10px"}} borderRadius="4">{tab}</Tabs.Trigger>
            
        ))
      }



  </Tabs.List>
</Flex>


  <Tabs.Content value="1H">
    <Image mt={{ base: "1rem", md: "3.2rem" }} w="100%" src="./graph.svg"/>

     <HStack justify="space-between" >
    {timestamps.map((timestamp, index) => (
      <Text key={timestamp || index} color="gray" fontSize={{base:"sm",sm:"sm",md:"md",lg:"md"}} textAlign="center">
        {timestamp}
      </Text>
   
     ))}


</HStack>
      
  </Tabs.Content>
  <Tabs.Content value="1D">two! </Tabs.Content>
  <Tabs.Content value="1W">three!</Tabs.Content>
  <Tabs.Content value="1M">four!</Tabs.Content>
</Tabs.Root>




    </CustomCard>


  )
}

export default PriceSection
