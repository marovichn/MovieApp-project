import { useState, useCallback, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import AccountMenu from "./AccountMenu";


const TOP_OFFSET=66;


const Navbar = () => {
  const [visibleBrowseMenu, setVisibleBrowseMenu] = useState(false);
  const [visibleAccountMenu, setVisibleAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY >= TOP_OFFSET){
        setShowBackground(true);
      }else{
        setShowBackground(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return ()=>{
      window.removeEventListener("scroll", handleScroll);
    }
  },[])

  const toggleMenu = useCallback(() => {
    setVisibleBrowseMenu((current) => {
      return !current;
    });
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setVisibleAccountMenu((current) => {
      return !current;
    });
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16
    py-6
    flex
    flex-row
    items-center
    transition
    duration-500
    ${showBackground ? "bg-zinc-900 bg-opacity-90" : "bg-opacity-0"
    }
    `}
      >
        <div className='h-5 lg:h-8 text-red-600 font-extrabold text-2xl -mt-4 lg:-mt-1'>MiFlix</div>

        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
          <NavbarItem label='Home'></NavbarItem>
          <NavbarItem label='Series'></NavbarItem>
          <NavbarItem label='Movies'></NavbarItem>
          <NavbarItem label='New & Popular'></NavbarItem>
          <NavbarItem label='My List'></NavbarItem>
        </div>
        <div
          onClick={toggleMenu}
          className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'
        >
          <p className='text-white text-sm'>Browse</p>
          <BsChevronDown
            className={`text-white mt-1 transition ${
              visibleBrowseMenu
                ? "rotate-180"
                : "rotate-0"
            }`}
          />
          <MobileMenu visible={visibleBrowseMenu}></MobileMenu>
        </div>
        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-grey-300 cursor-pointer'>
            <BsBell className='text-white text-md' />
          </div>
          <div
            onClick={toggleAccountMenu}
            className='flex flex-row items-center gap-2 cursor pointer relative'
          >
            <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden cursor-pointer'>
              <img src='/images/default-green.png' alt='' />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                visibleAccountMenu
                  ? "rotate-180 transition"
                  : "rotate-0 transition"
              }`}
            />
            <AccountMenu visible={visibleAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
