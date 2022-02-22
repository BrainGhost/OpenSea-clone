import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdAccountBalanceWallet } from "react-icons/md";
import openseaLogo from "../assests/opensea.svg";

const Header = () => {
  const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.9rem] flex`,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: `ml-[0.8rem] text-white font-semibold text-2xl`,
    searchBar: `flex flex-1 mx-[.8rem]  w-max-[520px] items-center bg-[#363840] rounded-[.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-xl`,
    SearchInput: `h-[2.6rem] w-full bg-transparent  border-0 outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: `hidden md:flex items-center justify-end`,
    headerItem: ` px-4  text-[#c8cacc] font-bold hover:text-white cursor-pointer `,
    headerIcon: `text-[#8a939b] text-3xl px-4  hover:text-white cursor-pointer `,
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
      <div className={style.headerItems}>
        <Link href="/collections/0xB9B1E787689fE710AEEB9645F45114624a54AD7D">
          <div className={style.headerItem}>Collections</div>
        </Link>

        <div className={style.headerItem}>Stats</div>
        <div className={style.headerItem}>Resources</div>
        <div className={style.headerItem}>Create</div>
        <div className={style.headerIcon}>
          <CgProfile />
        </div>
        <div className={style.headerIcon}>
          <MdAccountBalanceWallet />
        </div>
      </div>
    </div>
  );
};

export default Header;
