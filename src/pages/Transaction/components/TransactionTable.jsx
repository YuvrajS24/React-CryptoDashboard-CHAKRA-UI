import React, { useState } from 'react'
import { Stack, Table,Text,Tag,Card,useBreakpointValue } from "@chakra-ui/react"



const TransactionTable = () => {

   const isMobile = useBreakpointValue({base:true,md:false})



    const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4P",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5Q",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "+12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6R",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7S",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8T",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

   const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };

  if (isMobile){
      
    return (
      
        <Stack gap={4} px="2" py="4">

        {tableData.map((data)=>(
         
        <Card.Root key={data.id} border="1px solid" borderColor="gray.200" boxShadow="sm" borderRadius="1rem" transition="all 0.3s"
        _hover={{transform:"translateY(-4px)",boxShadow:"md"}}
        >
       
        <Card.Body>

        <Stack gap={2}>

        <Text fontSize="sm" color="gray.500" >ID: {data.id} </Text>
        <Stack direction="row" justify="space-between">
            <Text fontWeight="semibold">{data.type.name}</Text>

            {data.type?.tag && (

                <Tag.Root bg="purple.100" color="purple.600" borderRadius="full" px="3" py="0.5"  >
                 <Tag.Label>{data.type.tag}</Tag.Label>
                </Tag.Root>


            )}
        </Stack>

        <Stack direction="row" justify="space-between">
            <Text fontSize="sm">{data.date}</Text>
            <Text fontSize="sm">{data.time}</Text>
        </Stack>

        <Stack direction="row" justify="space-between" align="center">
           <Text fontWeight="medium"  
           
           color={
           
           data.amount.includes("+")? "green.600" :data.amount.includes("-")? "red.600" :"gray.700"

           }>{data.amount}</Text> 
           
           <Tag.Root
             bg={`linear-gradient(135deg, ${statusColor[data.status]}, ${statusColor[data.status]}CC)`}
             color="white" borderRadius="full"
             px="3"
             py="1"
             fontSize="xs"
             fontWeight="semibold"
             textTransform="capitalize"
           >
             <Tag.Label>{data.status}</Tag.Label>
          </Tag.Root>
        </Stack>


        </Stack>



        </Card.Body>


        <Card.Footer />
        </Card.Root>


        ))}


        </Stack>
    

    )





    }



  return (


  


    <Stack gap="10" overflowX="auto">

    
      <Table.Root size="md" minW="800px" >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>Date & Time</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Amount</Table.ColumnHeader>
            <Table.ColumnHeader>Status</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>

        {tableData.map((data)=>(

          <Table.Row color="p.black" key={data.id}>

           <Table.Cell fontSize="sm" fontWeight="medium">{data.id}</Table.Cell>

           <Table.Cell>
                       
                       <Stack gap={0}>
                             <Text fontSize="sm" fontWeight="medium">{data.date}</Text>
                             <Text fontSize="xs" color="#797E82">{data.time}</Text>
                       </Stack>
         

           </Table.Cell>


             <Table.Cell>

               <Stack gap={0}>
                    <Text fontSize="sm" fontWeight="medium">{data.type.name}</Text>
                     <Text fontSize="xs" color="#797E82">{data.type?.tag}</Text>
                 </Stack>


             </Table.Cell>


             <Table.Cell fontSize="sm" fontWeight="medium"  color={
           
           data.amount.includes("+")? "green.600" :data.amount.includes("-")? "red.600" :"gray.700"

           }>{data.amount}</Table.Cell>
             <Table.Cell fontSize="sm" fontWeight="medium">
<Tag.Root
  bg={`linear-gradient(135deg, ${statusColor[data.status]}, ${statusColor[data.status]}CC)`} 
  color="white"
  borderRadius="full"
  px="3.5"
  py="1.5"
  fontSize="xs"
  fontWeight="semibold"
  textTransform="capitalize"
  letterSpacing="wide"
 
  transition="all 0.25s ease"
  _hover={{
    transform: "translateY(-2px)",
    boxShadow: "0 5px 12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.25)"
  }}
>
  <Tag.Label>{data.status}</Tag.Label>
</Tag.Root>


          
             
             </Table.Cell>
     




          </Table.Row>

        ))}
          
        </Table.Body>
      </Table.Root>
    </Stack>
  )








}

export default TransactionTable
