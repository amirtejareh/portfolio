"use client";
import { useThemeStore } from "@/stores/darkmode.store";
import dynamic from "next/dynamic";

const TopHeader = dynamic(
  () => import("@/app/_components/pages/landing/TopHeader"),
  {
    ssr: true,
  }
);

const Hero = dynamic(() => import("@/app/_components/pages/landing/Hero"), {
  ssr: true,
});

const About = dynamic(() => import("@/app/_components/pages/landing/About"), {
  ssr: true,
});

const Experties = dynamic(
  () => import("@/app/_components/pages/landing/Experties"),
  { ssr: true }
);

const Skills = dynamic(() => import("@/app/_components/pages/landing/Skills"), {
  ssr: true,
});

const Services = dynamic(
  () => import("@/app/_components/pages/landing/Services"),
  {
    ssr: true,
  }
);

const Work = dynamic(() => import("@/app/_components/pages/landing/Work"), {
  ssr: true,
});

const Footer = dynamic(() => import("@/app/_components/pages/landing/Footer"), {
  ssr: true,
});

export default function HomePage() {
  const { isDarkMode } = useThemeStore();

  return (
    <>
      {!isDarkMode && (
        <div className="absolute top-0 left-0 z-[9999999] w-[300px] h-[300px] md:!w-[400px] md:!h-[400px] bg-[radial-gradient(circle_at_top_left,rgba(239,142,53,0.5)_0%,rgba(239,142,53,0)_70%)] blur-[100px] pointer-events-none"></div>
      )}
      <TopHeader />
      <Hero />
      <About />
      <Experties />
      <Skills />
      <Services />
      <Work />
      <Footer />
    </>
  );
}
