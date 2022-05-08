import { Flex, Text } from "@chakra-ui/react";

export function Header() {
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
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        ml='6'
        maxWidth='400'
        alignSelf='Center'
        color='gray.200'
        position='relative'
        bg='gray.800'
        borderRadius='full'
      >

      </Flex>
    </Flex>
  );
}
