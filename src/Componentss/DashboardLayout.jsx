import { Box,Flex,Container, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import TopNav from '../Componentss/TopNav'
import Sidenav from '../Componentss/Sidenav'
import SideDrawer from '../Componentss/SideDrawer'


const DashboardLayout = ({title,children}) => {


const { open, onOpen, onClose } = useDisclosure();


  return (
     <Flex >


<Box display={{ base: "none", lg: "flex" }}>  
    <Sidenav/>
</Box>   

    <SideDrawer open={open} onClose={onClose} />

      <Box flexGrow="1">

       <TopNav title={title}  onOpen={onOpen}/>
          <Container overflowX="hidden" overflowY="auto" h="calc(100vh - 88px)" mt="6" maxW="70rem"  
       >
             {children}
          </Container>
      
      </Box>
    

    </Flex>
      
  )
}

export default DashboardLayout
