import { Metadata } from "next";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Community from "@/components/Community";

export const metadata: Metadata = {
  title: "김영완 이력서",
  description: "프론트엔드 개발자 김영완의 이력서입니다.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <About />
        <Projects />
        <Education />
        <Community />
        <Contact />
      </div>
    </main>
  );
}
