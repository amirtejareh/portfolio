"use client";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/app/_components/pages/landing/Hero"), {
  ssr: true,
});

const About = dynamic(() => import("@/app/_components/pages/landing/About"), {
  ssr: true,
});
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
