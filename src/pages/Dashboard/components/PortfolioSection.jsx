import { HStack, Stack,Icon,Text,Tag,Button} from '@chakra-ui/react'
import React from 'react'
import { FaInfoCircle } from "react-icons/fa";
import { LuArrowDownToLine,LuArrowUpToLine } from "react-icons/lu";



const PortfolioSection = () => {
  
  return (
    <HStack  flexDir={{base:"column",xl:"row"}}    bg="white" borderRadius="xl" p={{base:3, md:6}} boxShadow="sm"  w="full" gap={{ base: 3, md: 8, xl: 16 }} justify="space-between"  >

<Stack   >
  <HStack   color="black.80" flexWrap="wrap" justify={{base:"center", xl:"flex-start"}}>
    <Text fontSize={{base:"sm",md:"sm",lg:"md"}} overflow="hidden">Total Portfolio Value</Text>
    <Icon as={FaInfoCircle} boxSize={{base:3,md:3.5}} />
  </HStack>
  <Text textStyle="h2" fontWeight="medium" fontSize={{base:"2xl"}}>₹ 112,312.24</Text>
</Stack>

 <Stack  textAlign={{ base: "center", xl: "left" }}>
      
        <HStack justify={{ base: "center", xl: "flex-start" }}  color="black.80">
           <Text  fontSize={{base:"sm",md:"sm",lg:"md"}}>Wallet Balances</Text>
         </HStack>

       
        <HStack justify={{ base: "center", xl: "flex-start" }}>
          <Text textStyle="h2" fontWeight="medium" >22.39401000</Text>
          <Tag.Root colorPalette="gray" variant="surface">
            <Tag.Label>BTC</Tag.Label>
          </Tag.Root>
        </HStack>

        
      </Stack>


<Stack  textAlign={{ base: "center", xl: "left" }}>


  <Text fontSize="sm" color="transparent">
          placeholder
        </Text>


 <HStack  justify={{ base: "center", xl: "flex-start" }} flexWrap="wrap" gap={2}>
        
      <Text  textStyle="h2" fontWeight="medium">₹ 1,300.00</Text>
          <Tag.Root colorPalette="gray" variant="surface">
            <Tag.Label>INR</Tag.Label>
          </Tag.Root>
  </HStack>

  </Stack>



  <HStack  justify={{base:"center",xl:"flex-end"}} gap={{base:3,md:4}} >

  <Button    rounded={7}  bg="purple.500" w={{base:"auto",sm:"auto"}} maxW={{base:"100px",sm:"140px"}}><Icon as={LuArrowDownToLine}/>Deposit</Button>
  <Button rounded={7} bg="purple.500" w={{base:"auto",sm:"auto"}} maxW={{base:"100px",sm:"140px"}}><Icon as={LuArrowUpToLine}/>Withdraw</Button>

  </HStack>


    
  </HStack>
  )
}

export default PortfolioSection
