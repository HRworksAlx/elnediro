import Link from "next/link";
import { ReactNode } from "react";

type NavItemProps = {
  children: ReactNode;
  href: string;
};

export const NavItem = ({ children, href }: NavItemProps) => (
  <Link className="px-4 py-2 rounded-md hover:bg-stone-100" href={href}>
    <li>{children}</li>
  </Link>
);
