import { Text, Icon, Link, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { LinkProps } from "next/link";
import { ElementType } from "react";

interface NavLinkProps  extends ChakraLinkProps {
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