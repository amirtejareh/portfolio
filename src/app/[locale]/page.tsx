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
  {
    ssr: true,
  }
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experties />
      <div className="mt-[120px]">
        <div className="text-primary !font-moul text-[40px] text-center">
          My Skills
        </div>
        <div className="mt-[56px]"></div>
      </div>
    </>
  );
}
