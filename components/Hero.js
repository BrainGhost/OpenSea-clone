import Image from "next/image";
import React from "react";
import matrixImage from "../assests/the_matrix.jpg";

const Hero = () => {
  const style = {
    wrapper: `relative`,
    container: `before:content[''] before:bg-red-500 before:absolute before:`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[.8rem] mb-2.5rem`,
    ctaContainer: `flex`,
    accentedButton: `relative text-lg font-semibold px-12 py-4 bg-[#2181e2]`,
    button: ``,
    cardContainer: ``,
    infoContainer: ``,
    author: ``,
    name: ``,
    infoIcon: ``,
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
                className="h-[2.25rem] rounded-full"
                src={matrixImage}
                alt="profile"
              />
              <div className={style.author}>
                <div className={style.name}>Junny Balib</div>
                <a className="text-[#1868b7]" href="#">
                  Hola kanoal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
