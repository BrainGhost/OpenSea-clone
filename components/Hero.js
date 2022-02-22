import Image from "next/image";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import matrixImage from "../assests/the_matrix.jpg";

const Hero = () => {
  const style = {
    wrapper: `relative`,
    container: `before:content[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthe_matrix.54934d89.jpg&w=640&q=75')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex w-4/5 m-auto md:w-full h-[calc(100vh/1.1)] relative justify-center flex-wrap items-center`,
    copyContainer: `w-full text-center md:text-left md:w-1/2 pb-5  `,
    title: `relative text-white text-[28px] md:text-[45px] font-semibold`,
    description: `text-[#99a1a8] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex justify-center md:justify-start`,
    accentedButton: `relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: `relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer hover:outline-sm hover:outline-[#2181e2]`,
    cardContainer: `rounded-[3rem]  shadow-2xl  flex flex-col hover:cursor-pointer`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center`,
    author: `flex flex-col justify-center ml-4`,
    name: ` font-bold text-white`,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold hover:text-white hover:cursor-pointer`,
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              OpenSea is the world&apos;s first and largerst NFT marketplace
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <Image className="rounded-t-lg" src={matrixImage} alt="thematrix" />
            <div className={style.infoContainer}>
              <Image
                width={50}
                height={50}
                className="rounded-full"
                src={matrixImage}
                alt="thematrix"
              />
              <div className={style.author}>
                <div className={style.name}>Junny Balib</div>
                <a className="text-[#1e7fe0]" href="#">
                  BrainGhost_
                </a>
              </div>
              <div className={style.infoIcon}>
                <AiOutlineInfoCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
