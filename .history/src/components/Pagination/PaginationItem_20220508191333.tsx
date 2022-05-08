import { Flex, Stack, Button, Box, theme } from "@chakra-ui/react";
interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({ isCurrent, number }: PaginationItemProps) {
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
        {number}
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
      {number}
    </Button>
  );
}
