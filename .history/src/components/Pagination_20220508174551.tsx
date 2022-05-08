import { Flex, Stack, Button, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Pagination() {
  return (
    <Stack>
      <Button size="sm" fontSize="xs" w='4'colorScheme="pink" disabled _disabled={{
        bgColor:'pink.500',
        cursor:'default'
      }}>
        1
      </Button>
    </Stack>
  );
}
