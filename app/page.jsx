"use client";
import { Questrial } from "next/font/google";
import Header from "@/components/Header";
import InitialSection from "@/components/InitialSection";
import AboutUsSection from "@/components/AboutUsSection";
import SkillsSection from "@/components/SkillsSection";
import MessageSection from "@/components/MessageSection";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className={questrial.className}>
      <Header />
      <InitialSection />
      <AboutUsSection />
      <SkillsSection />
      <MessageSection />
    </main>
  );
}
