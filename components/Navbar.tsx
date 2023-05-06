import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className='w-full fixed z-40'>
      <div
        className='px-4 md:px-16
    py-6
    flex
    flex-row
    items-center
    transition
    duration-500
    bg-zinc-900
    bg-opacity-90
    '
      >
        <img className='h-5 lg:h-8' src='/images/logo.png' alt='netflix logo' />

        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
          <NavbarItem label='Home'></NavbarItem>
          <NavbarItem label='Series'></NavbarItem>
          <NavbarItem label='New & Popular'></NavbarItem>
          <NavbarItem label='My List'></NavbarItem>
          <NavbarItem label='Browse By Languages'></NavbarItem>
        </div>
        <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
            <p className="text-white text-sm">Browse</p>
            <BsChevronDown className="text-white mt-1 transition"/>
            <MobileMenu></MobileMenu>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
