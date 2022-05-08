import { Text, Icon, Stack, Box, Link } from "@chakra-ui/react";
import { RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";

export function NiveSection() {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        AUTOMAÇÃO
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        <Link display="flex" alignItems="center">
          <Icon as={RiInputMethodLine} fontSize="20"></Icon>
          <Text ml="4" fontWeight="medium">
            Formulário
          </Text>
        </Link>
        <Link display="flex" alignItems="center">
          <Icon as={RiGitMergeLine} fontSize="20"></Icon>
          <Text ml="4" fontWeight="medium">
            Automação
          </Text>
        </Link>
      </Stack>
    </Box>
  );
}
