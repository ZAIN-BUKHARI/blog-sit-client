import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Signleblog from "@/components/singleblog/Signleblog";
import Feature from "@/components/feature/Feature";

export default function Home() {
  return (
    <>
    <Feature></Feature>
    <Signleblog/>
    </>
  );
}
