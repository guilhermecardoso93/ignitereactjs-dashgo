import { Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Search() {
  return (
    <>
      <Input
        color="gray.500"
        variant="unstyled"
        px="2"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </>
  );
}
