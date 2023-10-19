import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  label: String;
  href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
  return (
    <div className='text-white cursor-pointer hover:text-grey-300 transition'>
      <Link href={props.href}>{props.label}</Link>
    </div>
  );
};
export default NavbarItem;
