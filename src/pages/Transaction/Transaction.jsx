import React from 'react'
import DashboardLayout from '../../Componentss/DashboardLayout'
import { Card,Flex,Button,Icon,Tag, Input, InputGroup, HStack, useBreakpointValue  } from "@chakra-ui/react"
import { BsDownload } from "react-icons/bs";
import { Tabs } from "@chakra-ui/react"
import TransactionTable from './components/TransactionTable';
import { IoIosSearch } from "react-icons/io";




const TransactionPage = () => {

const tabs=[

  {
    name:"All",
    count:349,
  },
  {
    name:"Deposit",
    count:114,
  },
  {
    name:"Withdraw",
    count:213,
  },
  {
    name:"Trade",
    count:22,
  },



];


const isMobile = useBreakpointValue({base:true, md:false});


  return (

    <>
     
   
  <DashboardLayout title="Transactions" >

    <Flex justify="end" mt="6" mb="4" px={{ base: 3, md: 6 }} >
      <Button cursor="pointer" bg="purple.500"  rounded="lg" color="white" size={{base:"sm" , md:"md"}} > <Icon  as={BsDownload}/>Export CSV</Button>
    </Flex>

<Card.Root boxShadow="sm" borderRadius="1rem" mx={{base:3,md: 6}} >
 

  <Card.Body>
      <Tabs.Root  lazyMount unmountOnExit defaultValue="All">
      <Tabs.List
        pt="4" display="flex" w="full" justifyContent="space-between"
        alignItems={{ base: "flex-start", md: "center" }}
        flexDirection={{base:"flex-start",md:"center"}}
        gap={{base:4 , md:0}}>


<HStack wrap="wrap" gap={{base:2 , md:4}}>
      {
        tabs.map((tab)=>(


              <Tabs.Trigger p="6"  key={tab.name} value={tab.name} display="flex" gap="2"  pb={{base:"2",md:"4"}}
               fontSize={{base:"sm",md:"md"}}>
               
               {tab.name}

                     <Tag.Root>
                         <Tag.Label colorScheme="gray" px="2" borderRadius="full">{tab.count}</Tag.Label>
                     </Tag.Root>
               
               </Tabs.Trigger>

        ))
      }

</HStack>

{ !isMobile && (
       <InputGroup  pb="2" pr="2" maxW="240px" startElement={<IoIosSearch/>}>
      <Input placeholder="Search by ID or destination" />
    </InputGroup>
)}
 </Tabs.List>


{isMobile && (
 
     <InputGroup mt="5" maxW="full" px="2" startElement={<IoIosSearch/>}>
      <Input placeholder="Search by ID or destination" />
    </InputGroup>
)}


      <Tabs.Content value="All">
          <TransactionTable/>
      </Tabs.Content>
      <Tabs.Content value="Deposit">
           <TransactionTable/>
      </Tabs.Content>
      <Tabs.Content value="Withdraw">
              <TransactionTable/> 
      </Tabs.Content>
      <Tabs.Content value="Trade">
              <TransactionTable/> 
      </Tabs.Content>
    </Tabs.Root>
  </Card.Body>

 
</Card.Root>


</DashboardLayout>

   </>
  )
}

export default TransactionPage
