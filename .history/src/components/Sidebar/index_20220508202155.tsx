import { Box, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const isDrawerSidebart = useBreakpointValue({
    base:true,
    leg:false,
  })

  if(isDrawerSidebart){
    <Drawer isOpe={true} placement='left' onClose={() => {}}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton mt='6'/>
          <DrawerHeader>Navegação</DrawerHeader>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
}
