import { Text, Icon, Stack, Box, Link } from "@chakra-ui/react";
import { LinkProps } from "next/link";
import { ElementType, ReactNode } from "react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine
} from "react-icons/ri";

interface NavLinkProps  extends LinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20"></Icon>
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}