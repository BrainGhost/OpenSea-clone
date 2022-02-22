import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OpenSea Blockchain-clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header />
        <Hero />
      </main>
    </div>
  );
}
