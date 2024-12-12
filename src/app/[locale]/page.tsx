"use client";
import dynamic from "next/dynamic";

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

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experties />
      <Skills />
      <Services />
      <Work />
    </>
  );
}
