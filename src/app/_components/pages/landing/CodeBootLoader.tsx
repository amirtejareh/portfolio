"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const bootLines = [
  { prompt: "$", text: "pnpm portfolio:init" },
  { prompt: ">", text: "loading profile modules..." },
  { prompt: ">", text: "hydrating fullstack experience..." },
  { prompt: ">", text: "compiling projects, skills, services..." },
];

const CodeBootLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    let exitTimer: ReturnType<typeof setTimeout>;
    let removeTimer: ReturnType<typeof setTimeout>;

    const finishLoading = () => {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(1750 - elapsed, 260);

      exitTimer = setTimeout(() => {
        setIsVisible(false);
        removeTimer = setTimeout(() => setShouldRender(false), 650);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    document.body.classList.add("overflow-hidden");

    return () => {
      window.removeEventListener("load", finishLoading);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  useEffect(() => {
    if (!shouldRender) {
      document.body.classList.remove("overflow-hidden");
    }
  }, [shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[99999999] flex items-center justify-center overflow-hidden bg-[#0f0e0d] px-12 py-16 transition-all duration-700 sm:!px-16 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label="Loading portfolio"
      aria-live="polite"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,142,53,0.22)_0%,transparent_32%),radial-gradient(circle_at_78%_24%,rgba(255,255,255,0.08)_0%,transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.035)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.035)_50%,rgba(255,255,255,0.035)_75%,transparent_75%,transparent)] bg-[length:auto,auto,34px_34px]" />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-primary/70 shadow-[0_0_28px_rgba(239,142,53,0.9)]" />

      <div className="relative grid max-h-[calc(100svh-32px)] w-full max-w-[1040px] items-center gap-[12px] rounded-[18px] border border-white/10 bg-[rgba(22,21,20,0.78)] p-12 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-[22px] sm:!gap-[20px] sm:!p-20 md:!grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] md:!gap-[32px] md:!p-24">
        <div className="relative mx-auto flex h-[min(39svh,320px)] w-full max-w-[360px] items-end justify-center overflow-hidden rounded-[16px] border border-primary/20 bg-[linear-gradient(180deg,rgba(239,142,53,0.18)_0%,rgba(255,255,255,0.05)_44%,rgba(0,0,0,0.08)_100%)] sm:!h-auto">
          <div className="absolute inset-x-[12%] bottom-0 h-[42%] rounded-t-[50%] bg-primary/15 blur-[28px]" />
          <Image
            src="/images/coding-loader-avatar.png"
            alt="Amir Tejareh coding illustration"
            width={520}
            height={520}
            priority
            className="relative z-10 h-full w-full object-contain object-center sm:!aspect-square sm:!h-auto"
          />
          <div className="absolute bottom-10 left-10 right-10 z-20 h-[42px] rounded-[10px] border border-white/10 bg-black/45 px-12 py-8 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-md sm:!bottom-14 sm:!left-14 sm:!right-14 sm:!h-[46px]">
            <div className="mb-6 flex items-center justify-between text-[10px] leading-none text-white/60">
              <span>dev.session</span>
              <span className="text-primary">active</span>
            </div>
            <div className="h-[4px] overflow-hidden rounded-full bg-white/10">
              <div className="code-loader-scan h-full rounded-full bg-primary" />
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[14px] border border-white/10 bg-[#11100f]/95 shadow-[0_20px_70px_rgba(0,0,0,0.4)]">
          <div className="flex h-[38px] items-center justify-between border-b border-white/10 bg-white/[0.035] px-14 sm:!h-[42px]">
            <div className="flex gap-[6px]">
              <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f56]" />
              <span className="h-[10px] w-[10px] rounded-full bg-[#ffbd2e]" />
              <span className="h-[10px] w-[10px] rounded-full bg-[#27c93f]" />
            </div>
            <span className="font-mono text-[11px] text-white/45">
              ~/portfolio/bootstrap.ts
            </span>
          </div>

          <div className="space-y-8 p-12 font-mono text-[11px] leading-[18px] text-[#d9d4ce] sm:!space-y-14 sm:!p-20 sm:!text-[14px] sm:!leading-[24px]">
            {bootLines.map((line, index) => (
              <div
                key={line.text}
                className={`code-loader-line gap-[10px] ${
                  index > 1 ? "hidden sm:!flex" : "flex"
                }`}
                style={{ animationDelay: `${index * 140}ms` }}
              >
                <span className="text-primary">{line.prompt}</span>
                <span>{line.text}</span>
              </div>
            ))}

            <div className="rounded-[10px] border border-primary/20 bg-primary/[0.06] p-10 sm:!p-12">
              <div className="mb-8 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-white/50 sm:!mb-10 sm:!text-[11px] sm:!tracking-[0.16em]">
                <span>build progress</span>
                <span className="text-primary">loading</span>
              </div>
              <div className="h-[8px] overflow-hidden rounded-full bg-white/10">
                <div className="code-loader-progress h-full rounded-full bg-[linear-gradient(90deg,#ef8e35_0%,#ffd29f_52%,#ef8e35_100%)] shadow-[0_0_22px_rgba(239,142,53,0.75)]" />
              </div>
            </div>

            <div className="flex items-center gap-[8px] text-[11px] text-white/55 sm:!text-[12px]">
              <span className="h-[8px] w-[8px] animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(239,142,53,0.9)]" />
              <span>Rendering Amir Tejareh portfolio</span>
              <span className="code-loader-caret text-primary">_</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBootLoader;
