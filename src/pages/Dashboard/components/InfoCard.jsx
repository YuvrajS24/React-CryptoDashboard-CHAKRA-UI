import { CustomCard } from "../../../chakra/CustomCard"
import { Tag,Text} from "@chakra-ui/react"

import React from 'react'

const InfoCard = ({imgUrl,text,tagText,inverted}) => {
  return (
    <CustomCard bgColor={inverted?"purple.500":"white"} boxShadow="sm"  bgImage={`url(${imgUrl})`} bgSize="cover" bgRepeat="no-repeat"  
      padding="6">

   

    <Tag.Root fontWeight="medium"  bg={inverted?"white":"purple.500"} color={inverted?"purple.500":"white"} borderRadius="full">
        <Tag.Label fontSize="0.95rem" p="0.5rem">{tagText}</Tag.Label>
    </Tag.Root>

    <Text style={{ color: inverted ? "white" : "black" }} mt="4"   textStyle="h5">
      {text}
    </Text>
      
    </CustomCard>
  )
}

export default InfoCard
