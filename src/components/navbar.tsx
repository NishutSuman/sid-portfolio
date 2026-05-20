"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, Aperture } from "lucide-react";
import { useLenis } from "lenis/react";
import BrandLogo from "./brand-logo";

const navItems = [
  { name: "Home",       href: "/",            section: "hero"       },
  { name: "Portfolio",  href: "/#portfolio",  section: "portfolio"  },
  { name: "Experience", href: "/#experience", section: "experience" },
  { name: "Skills",     href: "/#skills",     section: "skills"     },
  { name: "Education",  href: "/#education",  section: "education"  },
  { name: "Contact",    href: "/#contact",    section: "contact"    },
];

const RESUME_URL = "https://drive.google.com/file/d/1Gfzg6d8ZYBSxL9EptcuhQGd7yzi2PXDV/view?usp=sharing";

// Ordered list of section IDs on the homepage
const SECTIONS = ["hero", "services", "portfolio", "experience", "skills", "education", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen]               = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const lenis    = useLenis();
  const isHome   = pathname === "/";

  // ── Scroll-spy: position-based (most reliable) ───────────────────────────
  useEffect(() => {
    if (!isHome) return;

    const update = () => {
      const offset = 120; // navbar height + a bit of buffer
      const y = window.scrollY + offset;

      // Walk from bottom section upward; first one whose top ≤ scrollY wins
      let current = "hero";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= y) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    update(); // run once on mount
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [isHome]);

  // ── Scroll listener for navbar glass effect ───────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Click: smooth-scroll when already on homepage ─────────────────────────
  const handleNavClick = useCallback(
    (e: React.MouseEvent, item: typeof navItems[0]) => {
      setIsOpen(false);
      const hash = item.href.startsWith("/#") ? item.href.slice(2) : null;
      if (hash && isHome) {
        e.preventDefault();
        lenis?.scrollTo(`#${hash}`, {
          duration: 1.6,
          offset: -80,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    },
    [isHome, lenis]
  );

  // ── Active check ──────────────────────────────────────────────────────────
  const isActive = (item: typeof navItems[0]) => {
    if (item.section === null) return pathname === item.href;
    if (!isHome) return false;
    // "services" section has no nav entry → keep "Home" lit while in it
    const effective = activeSection === "services" ? "hero" : activeSection;
    return effective === item.section;
  };

  return (
    <m.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-300 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div
        className={`
          flex flex-col items-center px-5 sm:px-7 py-3 transition-all duration-500 border
          ${scrolled || isOpen
            ? "w-[95%] max-w-5xl rounded-3xl backdrop-blur-xl bg-white/[0.04] border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "w-full max-w-7xl bg-transparent border-transparent"
          }
        `}
      >
        <div className="w-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group shrink-0">
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              scrolled ? "bg-white/5 group-hover:bg-blue-600" : "bg-white/10 group-hover:bg-blue-600"
            }`}>
              <Aperture size={18} className="text-white" />
            </div>
            <BrandLogo className="text-lg group-hover:opacity-90 transition-opacity" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-0.5">
            {navItems.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="relative px-3.5 py-2 rounded-full text-sm font-medium transition-colors duration-200 group"
                >
                  <span className={`relative z-10 transition-colors duration-200 ${
                    active ? "text-white" : "text-gray-400 group-hover:text-white"
                  }`}>
                    {item.name}
                  </span>

                  {/* Sliding active pill */}
                  {active && (
                    <m.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                    />
                  )}

                  {/* Hover bg */}
                  <div className="absolute inset-0 bg-white/[0.04] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-200" />
                </Link>
              );
            })}
          </div>

          {/* Resume */}
          <div className="hidden lg:block shrink-0">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.45)]"
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-full overflow-hidden lg:hidden"
            >
              <div className="pt-3 pb-2 space-y-1 flex flex-col border-t border-white/5 mt-3">
                {navItems.map((item, i) => {
                  const active = isActive(item);
                  return (
                    <m.div
                      key={item.name}
                      initial={{ x: -14, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item)}
                        className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          active
                            ? "text-white bg-blue-600/20 border border-blue-500/30"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </m.div>
                  );
                })}

                <m.div
                  initial={{ x: -14, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.04 }}
                  className="pt-1"
                >
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-sm font-bold text-center bg-blue-600/20 border border-blue-500/30 text-blue-300 hover:bg-blue-600/30 transition-all"
                  >
                    Resume
                  </a>
                </m.div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.nav>
  );
}
