"use client";

import { m } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import Image from "next/image";
import MagneticButton from "./magnetic-button";
import { useLenis } from "lenis/react";

const roles = ["Graphic Designer", "Video Editor", "Cinematographer"];

export default function Hero() {
  const lenis = useLenis();

  const scrollToWork = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (lenis) {
      lenis.scrollTo("#portfolio", {
        duration: 2,
        offset: -80,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[35%] left-1/4 w-[900px] h-[700px] bg-blue-900/15 rounded-[100%] blur-[130px]" />
        <div className="absolute bottom-0 right-[-10%] w-[700px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[20%] w-[500px] h-[500px] bg-indigo-900/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── LEFT: Profile Photo ── */}
          <m.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
            className="shrink-0 flex flex-col items-center gap-5"
          >
            {/* Photo Ring */}
            <div className="relative">
              {/* Animated glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 blur-md opacity-40 animate-pulse" />
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 opacity-80" />

              {/* Photo */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-2 ring-white/10 bg-gradient-to-br from-blue-900/60 to-purple-900/60">
                <Image
                  src="/sidhartha.png"
                  alt="Sidhartha Sahoo"
                  fill
                  className="object-cover object-top"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                  priority
                />
              </div>

              {/* Floating Available badge */}
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0a0a1a]/90 border border-blue-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.2)] text-xs font-semibold text-blue-300 tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
                  Available for Hire
                </div>
              </m.div>
            </div>

            {/* Location pill */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex items-center gap-1.5 text-gray-500 text-sm mt-2"
            >
              <MapPin size={13} className="text-blue-400 shrink-0" />
              <span>Bhubaneswar, Odisha</span>
            </m.div>
          </m.div>

          {/* ── RIGHT: Text Content ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Role tags */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6"
            >
              {roles.map((role, i) => (
                <m.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] sm:text-xs font-bold text-gray-400 tracking-[0.2em] uppercase backdrop-blur-sm"
                >
                  {role}
                </m.span>
              ))}
            </m.div>

            {/* Name */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.88] mb-6">
              <m.span
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
                className="block bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent pb-1"
              >
                SIDHARTHA
              </m.span>
              <m.span
                initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.45 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-[0_0_25px_rgba(99,102,241,0.3)]"
              >
                SAHOO
              </m.span>
            </h1>

            {/* Subtitle */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed mb-8"
            >
              Crafting brand identities, cinematic stories, and visual experiences, backed by{" "}
              <span className="text-white font-semibold">
                4 years of creative excellence
              </span>{" "}
              across design, video, and cinematography.
            </m.p>

            {/* CTA Buttons */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10"
            >
              <MagneticButton>
                <button
                  onClick={scrollToWork}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-black bg-white rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] cursor-pointer"
                >
                  View My Work
                </button>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-white/20"
                >
                  Get in Touch
                </a>
              </MagneticButton>
            </m.div>

            {/* Stats Row */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex items-center justify-center lg:justify-start gap-8 pt-6 border-t border-white/5"
            >
              {[
                { value: "4+", label: "Years Exp." },
                { value: "3", label: "Disciplines" },
                { value: "50+", label: "Projects" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-black text-white">{stat.value}</span>
                  <span className="text-xs text-gray-500 mt-0.5 tracking-widest uppercase">{stat.label}</span>
                </div>
              ))}
            </m.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={scrollToWork}
          className="flex flex-col items-center gap-2 text-white/30 hover:text-white/70 transition-colors duration-500"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase font-medium">Scroll</span>
          <ArrowDown className="animate-bounce" size={16} strokeWidth={1.5} />
        </button>
      </m.div>
    </section>
  );
}
