import { Text, Icon, Stack, Box, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavLink({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        
      </Stack>
    </Box>
  );
}