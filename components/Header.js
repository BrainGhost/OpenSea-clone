import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import openseaLogo from "../assests/opensea.svg";
const Header = () => {
  const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.9rem] flex`,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: `ml-[0.8rem] text-white font-semibold text-2xl`,
    searchBar: `flex flex-1 mx-[.8rem]  w-max-[520px] items-center bg-[#363840] rounded-[.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-xl`,
    SearchInput: `h-[2.6rem] w-full bg-transparent  border-0 outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  };
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={openseaLogo} height={40} width={40} />
          <h1 className={style.logoText}>OpenSea</h1>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.SearchInput}
          placeholder="Search items, collections and accounts"
        />
      </div>
    </div>
  );
};

export default Header;
