import DashboardLayout from '../../Componentss/DashboardLayout'
import React from 'react'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import { Grid, GridItem,Card,Icon,Text} from '@chakra-ui/react'
import InfoCard from "../Dashboard/components/InfoCard"
import { BiSolidMessageRounded } from "react-icons/bi";


const Support = () => {
  return (
    <DashboardLayout title="Support">

    <Grid 



   
     gridTemplateColumns={{
      base:"1fr",
      sm:"1fr",
      md: 'repeat(2,1fr)',
      lg:"1fr 2fr",
     }}
     gap={{ base: 6, md: 8, lg: 10 }}

     alignItems="start"
     
    px={{ base: 4, md: 10, lg: 20 }}

     pt={{ base: 4, md: 6, lg: 8 }}

   
    
    >

    <GridItem w="full" >
        <SupportCard/>
    </GridItem>
      
   <GridItem

  justifySelf="strech"

   maxW={{ base: "100%", md: "720px", lg: "860px" }}
   w="full"
>
  <ContactCard />
</GridItem>


    </Grid> 

  
  <Grid
    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
   gap={{ base: 6, md: 8 }}
   mt={{ base: 8, md: 10 }}
    px={{ base: 4, md: 10, lg: 20 }} 
    w="full"
    mb={{ base: 8, md: 10 }}
    
 
     
  >
  
  <Card.Root bg="transparent" 
  h="9rem" 
  transition="all 0.3s"
_hover={{
  transform: "translateY(-4px)",
  boxShadow: "md",
}}

border="1px solid #E5E7EB"
borderRadius="xl"
p={0}
  
  >
<Card.Header>

<Icon pb="0" mb="0"  boxSize={8} color="purple.500" as={BiSolidMessageRounded}/>
</Card.Header>
  <Card.Body pt="0">
     <Text fontSize="2xl" fontWeight="medium">Live Chat</Text>
     <Text color="gray" fontSize="md">Don’t have time to wait for the answer? Chat with us now.</Text>
     

  </Card.Body>
  <Card.Footer />
</Card.Root>

    <InfoCard 

     
     
      inverted={true}
      imgUrl="/grid_bg.svg"
      text="Chat with us now"
      tagText="Chatbot"
      h="9rem"
    />
  </Grid>





    </DashboardLayout>
  )
}

export default Support
