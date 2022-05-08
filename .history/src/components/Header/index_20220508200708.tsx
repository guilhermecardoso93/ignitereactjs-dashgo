import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg:true
  })
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      marginX="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Logo />
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="Center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        {isWideVersion && <Search />}
        
      </Flex>
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVErsion}/>
      </Flex>
    </Flex>
  );
}
