import React from 'react'
import {Box, Heading,Icon,Button, HStack,Menu} from "@chakra-ui/react"


import {FaUserTie } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";





const TopNav = ({title,onOpen}) => {

    return (

        <Box boxShadow="sm" px="4" bg="white">
        <Icon  transform="translateY(5px)" cursor="pointer" as={FaBars} onClick={onOpen} display={{base:"block", lg:"none"}} />

    <HStack maxW="70rem" h="16" justify="space-between" mx="auto">

        <Heading fontWeight="medium" fontSize="28px">{title}</Heading>

      <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant="ghost" p="0">
              <Icon as={FaUserTie} fontSize="24px" />
            </Button>
          </Menu.Trigger>

          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item>Logout</Menu.Item>
              <Menu.Item>Support</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>

    </HStack>
    </Box>
  )
}

export default TopNav
