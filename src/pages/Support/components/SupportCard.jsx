import React from 'react'
import {Flex,Stack,Icon,Text} from '@chakra-ui/react'
import { IoMail } from "react-icons/io5";


const SupportCard = () => {
  return (


    <Flex>

          <Stack>

            <Icon color="purple.500" fontSize="1.8rem" as={IoMail}/>
            <Text fontSize="32px" fontWeight="medium"  >Contact Us</Text>


            <Text color="#535D66" >Have a question or just want to know more? Feel free to reach out to us.</Text>


          </Stack>

      
      
    </Flex>

  )
}

export default SupportCard
