import Link from "next/link";
import React from "react";

interface MenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className='bg-black w-56 absolute top-8 -left-20 py-5 flex-col border-2 border-gray-800 flex'>
      <div className='flex flex-col gap-4'>
        <div className='px-3 text-center text-white hover:underline'>
          <Link href='/'>Home</Link>
        </div>
        <div className='px-3 text-center text-white hover:underline'>
          <Link href='/series'>Series</Link>
        </div>
        <div className='px-3 text-center text-white hover:underline'>
          <Link href='/movies'>Movies</Link>
        </div>
        <div className='px-3 text-center text-white hover:underline'>
          <Link href='/trending'>New & Popular</Link>
        </div>
        <div className='px-3 text-center text-white hover:underline'>
          <Link href='/favorites'>My List</Link>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
