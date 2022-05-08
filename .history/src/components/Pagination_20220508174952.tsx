import { Flex, Stack, Button, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Pagination() {
  return (
    <Stack
      direction="row"
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Stack spacing='2' direction='row'>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: "pink.500",
            cursor: "default"
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bgColor="gray.700"
          _hover={{
            bgColor: "gray500"
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bgColor="gray.700"
          _hover={{
            bgColor: "gray500"
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bgColor="gray.700"
          _hover={{
            bgColor: "gray500"
          }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  );
}
