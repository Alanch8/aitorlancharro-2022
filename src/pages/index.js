import Head from "next/head";
import "animate.css";
import { Header } from "../components/header";
import { HeroSection } from "../components/heroSection";

export default function Home() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>Aitor Lancharro - FullStack Developer | UX/UI Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
      <style jsx>{``}</style>
      <style jsx global>{``}</style>
    </div>
  );
}
