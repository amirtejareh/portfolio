"use client";
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
  return (
    <div className="">
      <TopHeader />
      <Hero />
      <About />
      <Experties />
      <Skills />
      <Services />
      <Work />
      <Footer />
    </div>
  );
}
