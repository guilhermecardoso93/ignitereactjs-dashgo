import Link, { LinkProps } from "next/link";

interface ActiveLinkProps extends LinkProps {}

export function ActiveLink({ ...rest }: ActiveLinkProps) {
  return <Link></Link>;
}
