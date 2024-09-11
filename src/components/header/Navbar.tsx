import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./NavItem";

const Navbar = () => (
  <div className="p-4 text-center bg-white grid grid-cols-3 items-center">
    <Image src="/elnediro.png" alt="El Nediro" width={50} height={50} />
    <nav>
      <ul className="flex justify-around text-2xl">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/admin">Admin</NavItem>
      </ul>
    </nav>
  </div>
);

export default Navbar;
