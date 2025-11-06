import {CustomCard} from "../../../chakra/CustomCard"
import {Text,Icon,Flex,Stack,Grid,Separator,Button} from "@chakra-ui/react"
import React, { Fragment } from 'react'
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SiBitcoinsv } from "react-icons/si";



const Transactions = () => {
 
    const transactions = [

     { 
        id:"1",
        icon: RiMoneyRupeeCircleFill,
        text:"INR Deposit",
        amount:"+81,123.10",
        timestamp:"2022-06-09 7:06 PM",
    }
    ,

     { 

        id:"2",
        icon:SiBitcoinsv ,
        text:"BTC Sell",
        amount:"- 12.48513391 BTC",
        timestamp:"2022-05-27 12:32 PM",
    }
,
   
     { 
        id:"3",
        icon: RiMoneyRupeeCircleFill,
        text:"INR Deposit",
        amount:"+81,123.10",
        timestamp:"2022-06-09 7:06 PM",
    }

 ]



  return (
    <CustomCard h="full" boxShadow="sm">

    <Text mb="6" fontSize={{base:"sm",md:"md",lg:"md"}} color="black">Recent Transactions</Text>


    <Stack gap={4}>
       
       {
        transactions.map((transaction,i)=>(

        <Fragment key={transaction.id}>

        {i!=0 && <Separator/>}

            <Flex  gap={4} >

                     <Grid placeItems="center" bg="#e6e6e6" boxSize={10} borderRadius="full">
                          <Icon fontSize={22} as={transaction.icon}/>
                     </Grid>

                     <Flex justify="space-between" w="full">

                        <Stack gap={0}>
                             <Text textStyle="h6">{transaction.text}</Text>
                             <Text fontSize="sm" color="#797E82">{transaction.timestamp}</Text>
                        </Stack>

                        <Text textStyle="h6">{transaction.amount}</Text>
                     </Flex>
            </Flex>
        </Fragment> 
         ))
       }
    </Stack>
      
     <Button rounded="lg" bg="#e1e1e5" color="black" mt={5} w="full">View All</Button>

    </CustomCard>
  )
}

export default Transactions
