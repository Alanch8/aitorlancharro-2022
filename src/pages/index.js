import "animate.css";
import Head from "next/head";
import { Header } from "../components/header";
import { HeroSection } from "../components/heroSection";
import { WorkSection } from "../components/workSection";
import { SkillsSection } from "../components/skillsSection";
import { ContactSection } from "../components/contactSection";

export default function Home() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>Aitor Lancharro - Frontend Developer | UX/UI Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
      <style jsx>{``}</style>
      <style jsx global>{``}</style>
    </div>
  );
}
