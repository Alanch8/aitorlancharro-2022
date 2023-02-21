import "animate.css";
import Head from "next/head";
import { Header } from "../components/header";
import { HeroSection } from "../components/heroSection";
import { WorkSection } from "../components/workSection";
import { SkillsSection } from "../components/skillsSection";
import { ContactSection } from "../components/contactSection";
import { FooterSection } from "../components/footerSection";
import { Divider } from "../components/divider";
import { Announcement } from "../components/announcement";

export default function Home() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>Aitor Lancharro - Frontend Developer | UX/UI Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Announcement />
      <HeroSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
      <Divider />
      <FooterSection />
      <style jsx>{``}</style>
      <style jsx global>{``}</style>
    </div>
  );
}
