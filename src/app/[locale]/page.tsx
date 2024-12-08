"use client";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/app/_components/pages/landing/Hero"), {
  ssr: true,
});
export default function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}
