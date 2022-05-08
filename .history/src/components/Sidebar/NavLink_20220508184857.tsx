import { Text, Icon, Stack, Box, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiInputMethodLine, RiGitMergeLine, RiDashboardLine } from "react-icons/ri";

interface NavLinkProps {
  icon: ElementType;
  children:string;
}

export function NavLink() {
  return (
    <Link display="flex" alignItems="center">
      <Icon as={RiDashboardLine} fontSize="20"></Icon>
      <Text ml="4" fontWeight="medium">
        Dashboard
      </Text>
    </Link>
  );
}
