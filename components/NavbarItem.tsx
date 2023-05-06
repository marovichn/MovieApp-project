import React from "react";

interface NavbarItemProps{
label: String,
}

const NavbarItem: React.FC<NavbarItemProps> =(props)=>{
return <div className="text-white cursor-pointer hover:text-grey-300 transition">
    {props.label}
</div>
}
export default NavbarItem;