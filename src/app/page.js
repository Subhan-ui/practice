import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/component/Navbar";
import Hero from "@/component/Hero";
import Featured from "@/component/Featured";

export default function Home() {
  return (
    <>
    <div className={styles.heroSection}>
   <Navbar />
   <Hero />
    </div>
    <Featured />

   </>
  );
}
