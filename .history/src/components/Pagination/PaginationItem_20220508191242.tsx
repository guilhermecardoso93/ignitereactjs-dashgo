import { Flex, Stack, Button, Box, theme } from "@chakra-ui/react";
interface PaginationItemProps {
  isCurrent?: boolean;
}

export function PaginationItem({ isCurrent }: PaginationItemProps) {
  if (isCurrent) {
    return (
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
    );
  }

  return (
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
  );
}
