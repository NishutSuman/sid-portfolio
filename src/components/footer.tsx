"use client";

import Link from "next/link";
import { Linkedin, Mail, Instagram, Phone, MapPin } from "lucide-react";
import BrandLogo from "./brand-logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/sidhartha-sahoo",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/mastersidhh",
      icon: Instagram,
    },
    {
      name: "Email",
      href: "mailto:mastersidhh@gmail.com",
      icon: Mail,
    },
    {
      name: "Phone",
      href: "tel:+917735624830",
      icon: Phone,
    },
  ];

  return (
    <footer className="glass-panel border-t border-white/5 mt-20 backdrop-blur-3xl">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="leading-none">
              <BrandLogo className="text-3xl" />
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Graphic Designer · Video Editor · Cinematographer, crafting brand identities,
              cinematic stories, and visual experiences from Bhubaneswar, Odisha.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin size={14} className="text-blue-400 shrink-0" />
              <span>Bhubaneswar, Odisha, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white tracking-wide uppercase text-xs opacity-70">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
              <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/skills" className="text-gray-400 hover:text-blue-400 transition-colors">
                Skills
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white tracking-wide uppercase text-xs opacity-70">
              Connect With Me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group"
                    aria-label={link.name}
                  >
                    <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all duration-300">
                      <Icon
                        size={18}
                        className="text-gray-400 group-hover:text-blue-400 transition-colors"
                      />
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="space-y-2">
              <a
                href="mailto:mastersidhh@gmail.com"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                mastersidhh@gmail.com
              </a>
              <a
                href="tel:+917735624830"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                +91 77356 24830
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Sidhartha Sahoo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
