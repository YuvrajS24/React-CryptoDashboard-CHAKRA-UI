import {Drawer,Icon} from "@chakra-ui/react";
import Sidenav from "./Sidenav";
import { IoMdClose } from "react-icons/io";


const SideDrawer = ({ open, onClose }) => {
  
  return (
    <Drawer.Root open={open} onOpenChange={onClose} placement="left">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
         <Drawer.CloseTrigger asChild>
             <Icon as={IoMdClose} fontSize="15px" cursor="pointer" mr="10px" />
         </Drawer.CloseTrigger>

          <Drawer.Body>
            <Sidenav />
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
};

export default SideDrawer;
