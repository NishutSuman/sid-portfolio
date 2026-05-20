"use client";

import React from "react";
import { m } from "framer-motion";
import Hero from "@/components/hero";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { ExternalLink, Image as ImageIcon, Play, Briefcase, GraduationCap, ChevronRight, Mail, Phone, MapPin, Clock, Send, Instagram, Linkedin, Monitor, BookOpen } from "lucide-react";
import { graphicsWork, videoWork, portfolioLinks } from "@/db/portfolio";
import { videoEditingSkills, specializations } from "@/db/skills";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const experience = [
  {
    period: "2024 – Present",
    role: "Cinematographer & Video Editor",
    company: "DigiKite Infomatrix Pvt. Ltd.",
    type: "Full-time",
    current: true,
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    dot: "bg-blue-500",
    ring: "ring-blue-500/40",
    description: "Leading cinematography and post-production for brand campaigns, events, and promotional content.",
  },
  {
    period: "2022 – 2024",
    role: "Graphic Designer & Video Editor",
    company: "Digitiall Pvt. Ltd.",
    type: "Full-time",
    current: false,
    border: "border-purple-500/30",
    bg: "bg-purple-500/5",
    dot: "bg-purple-500",
    ring: "ring-white/5",
    description: "Designed brand identities, social media content, and edited promotional videos for diverse clients.",
  },
  {
    period: "Freelance",
    role: "Photography & Design Workshop Facilitator",
    company: "Jawahar Navodaya Vidyalaya, Konark, Puri",
    type: "Workshop",
    current: false,
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/5",
    dot: "bg-indigo-400",
    ring: "ring-white/5",
    description: "Conducted photography and graphic design workshops for students at a national-level school.",
  },
  {
    period: "Freelance",
    role: "Photography & Design Workshop Facilitator",
    company: "Navodaya Leadership Institute, Konark, Puri",
    type: "Workshop",
    current: false,
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
    dot: "bg-cyan-400",
    ring: "ring-white/5",
    description: "Delivered hands-on photography and visual design training to leadership program participants.",
  },
];

const education = [
  {
    period: "2024 – 2026",
    degree: "Masters in Computer Application (MCA)",
    institution: "College of IT and Management, BPUT",
    status: "Ongoing",
    accent: "from-blue-400 to-purple-500",
    icon: Monitor,
    iconColor: "text-blue-400",
    iconBg: "from-blue-500/30 to-purple-500/10",
  },
  {
    period: "2019 – 2022",
    degree: "B.Sc. Computer Science",
    institution: "College of Basic Science and Humanities, OUAT, BBSR",
    status: "Completed",
    accent: "from-indigo-400 to-blue-500",
    icon: BookOpen,
    iconColor: "text-indigo-400",
    iconBg: "from-indigo-500/30 to-blue-500/10",
  },
];

const services = [
  { title: "Logo & Brand Identity", description: "Distinctive logos and cohesive brand systems.", icon: "✦", accent: "from-blue-500/20 to-blue-600/5" },
  { title: "Social Media Design", description: "Scroll-stopping posts, stories, and reel artwork.", icon: "◈", accent: "from-purple-500/20 to-purple-600/5" },
  { title: "Video Editing", description: "Polished edits with dynamic cuts and cinematic transitions.", icon: "▶", accent: "from-indigo-500/20 to-indigo-600/5" },
  { title: "Motion Graphics", description: "Animated titles, lower-thirds, and motion elements.", icon: "◎", accent: "from-cyan-500/20 to-cyan-600/5" },
  { title: "Cinematography", description: "Event, product, and travel shoots with Mirrorless & DSLR.", icon: "⬡", accent: "from-violet-500/20 to-violet-600/5" },
  { title: "Color Grading & Retouching", description: "Cinematic looks and Lightroom / DaVinci finishing.", icon: "◐", accent: "from-rose-500/20 to-rose-600/5" },
];


function driveImageUrl(id: string) {
  return id.startsWith("/") ? id : `https://drive.google.com/thumbnail?id=${id}&sz=w800`;
}
function driveEmbedUrl(id: string) {
  return `https://drive.google.com/file/d/${id}/preview`;
}

function SectionDivider() {
  return <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />;
}

export default function HomePage() {
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast("Please enter a valid email address."); return;
    }
    if (!message || message.length < 20) {
      toast("Message should be at least 20 characters."); return;
    }
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email,
        message,
        projectType: data.get("project-type"),
        timeline: data.get("timeline"),
      }),
    });
    const result = await res.json();
    if (res.ok) { toast("Message sent!"); form.reset(); }
    else toast(result.error || "Something went wrong.");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Hero />

      {/* SERVICES */}
      <section id="services" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/15 blur-[100px] rounded-full pointer-events-none" />
            <m.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-5 text-white tracking-tight relative z-10"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">What I Do</span>
            </m.h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed relative z-10">
              Full creative spectrum, from brand conception to final cut, told with{" "}
              <span className="text-blue-400 font-medium">clarity, style, and impact</span>.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <m.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.07 }} className="h-full">
                <GlassmorphismCard className="p-7 h-full flex flex-col group hover:bg-white/[0.04] hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${s.accent} border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-xl">{s.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{s.description}</p>
                </GlassmorphismCard>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 relative">
        <SectionDivider />
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">Selected Work</span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto font-light">
              Design systems, campaigns, and films crafted with purpose.
            </p>
          </m.div>

          {/* GRAPHICS subsection */}
          <div className="mb-20">
            <m.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 border border-blue-500/20 flex items-center justify-center shrink-0">
                <ImageIcon size={16} className="text-blue-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Graphics</h3>
            </m.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {graphicsWork.map((item, i) => (
                <m.div key={item.id}
                  initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group relative aspect-square rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.02] cursor-pointer">
                  {item.driveId ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={driveImageUrl(item.driveId)}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const el = e.currentTarget;
                        el.style.display = "none";
                        el.nextElementSibling?.removeAttribute("style");
                      }}
                    />
                  ) : null}
                  {/* Fallback always rendered, hidden when image loads */}
                  <div className={`${item.driveId ? "absolute inset-0" : "w-full h-full"} flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-blue-900/30 to-purple-900/20`}
                    style={item.driveId ? { display: "none" } : {}}>
                    <ImageIcon size={22} className="text-blue-400/40" />
                    <span className="text-[10px] text-white/30 text-center px-2 leading-tight">{item.title}</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 pointer-events-none">
                    <p className="text-white text-[11px] font-semibold leading-tight">{item.title}</p>
                    <p className="text-blue-300 text-[10px] mt-0.5">{item.category}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>

          {/* VIDEOS subsection */}
          <div>
            <m.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Play size={16} className="text-purple-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Videos</h3>
            </m.div>
            {(() => {
              const glows = [
                { shadow: "shadow-[0_0_30px_rgba(139,92,246,0.25)]", border: "border-violet-500/20" },
                { shadow: "shadow-[0_0_30px_rgba(59,130,246,0.25)]",  border: "border-blue-500/20"   },
                { shadow: "shadow-[0_0_30px_rgba(168,85,247,0.25)]",  border: "border-purple-500/20" },
                { shadow: "shadow-[0_0_30px_rgba(99,102,241,0.25)]",  border: "border-indigo-500/20" },
              ];
              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {videoWork.map((item, i) => {
                    const g = glows[i % glows.length];
                    return (
                      <m.div key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, delay: i * 0.08 }}
                        className={`relative rounded-2xl overflow-hidden border ${g.border} ${g.shadow} bg-black`}>
                        <div className="relative w-full aspect-video">
                          {item.driveId ? (
                            <iframe
                              src={driveEmbedUrl(item.driveId)}
                              className="absolute inset-0 w-full h-full"
                              allow="autoplay; fullscreen"
                              allowFullScreen
                              title={item.title}
                              style={{ border: 0 }}
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-indigo-900/20">
                              <div className="w-12 h-12 rounded-full bg-purple-600/30 border border-purple-500/30 flex items-center justify-center">
                                <Play size={18} className="text-purple-300/60 fill-purple-300/40 translate-x-0.5" />
                              </div>
                            </div>
                          )}
                        </div>
                      </m.div>
                    );
                  })}
                </div>
              );
            })()}
            {portfolioLinks.videosFolder && (
              <a href={portfolioLinks.videosFolder} target="_blank" rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/10 bg-white/[0.02] text-sm font-medium text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 group">
                View Full Video Portfolio
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </div>

          {/* Highlighted CTA — full portfolio */}
          {portfolioLinks.graphicsFolder && (
            <m.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-16 flex justify-center"
            >
              <a
                href={portfolioLinks.graphicsFolder}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-[0_0_30px_rgba(79,70,229,0.45)] hover:shadow-[0_0_45px_rgba(79,70,229,0.7)] hover:scale-[1.03] transition-all duration-300 ring-1 ring-white/15"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/0 via-white/15 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                Explore Full Portfolio on Drive
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </m.div>
          )}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 px-4 sm:px-6 relative">
        <SectionDivider />
        <div className="max-w-4xl mx-auto">
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Briefcase size={18} className="text-blue-400" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Work Experience</h2>
              <p className="text-gray-500 text-sm mt-0.5">4 years across agencies, brands and workshops</p>
            </div>
          </m.div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/20 to-transparent hidden sm:block" />
            <div className="space-y-6">
              {experience.map((job, i) => (
                <m.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }} className="sm:pl-12 relative">
                  <div className={`absolute left-[9px] top-5 w-3 h-3 rounded-full ${job.dot} border-2 border-[#020817] hidden sm:block ring-2 ${job.ring}`} />
                  <div className={`rounded-2xl border ${job.border} ${job.bg} p-5 sm:p-6 backdrop-blur-sm hover:brightness-110 transition-all duration-300`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-white font-bold text-lg leading-tight">{job.role}</h3>
                          {job.current && (
                            <span className="px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-bold tracking-wider uppercase">Current</span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm font-medium">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-mono text-gray-500">{job.period}</span>
                        <span className="px-2 py-0.5 rounded-full border border-white/10 text-gray-400 text-[10px] uppercase tracking-wide">{job.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{job.description}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-4 sm:px-6 relative">
        <SectionDivider />
        <div className="max-w-6xl mx-auto">
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-center mb-14 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-bold mb-5 text-white tracking-tight relative z-10">
              <span className="bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">Skills & Tools</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light relative z-10">
              4 years of professional creative experience across design, video post-production, and cinematography.
            </p>
          </m.div>

          {/* Tools grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-5 mb-14">
            {videoEditingSkills.map((skill, i) => (
              <m.div key={skill.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}>
                <GlassmorphismCard className="group hover:bg-white/[0.06] hover:border-white/20 cursor-default">
                  <div className="flex flex-col items-center justify-center text-center gap-4 py-8 px-4">
                    <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={skill.image_link} alt={skill.name} width={56} height={56} className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" />
                    </div>
                    <p className={`text-[11px] font-bold tracking-wide ${skill.color}`}>{skill.name.replace("Adobe ", "")}</p>
                  </div>
                </GlassmorphismCard>
              </m.div>
            ))}
          </div>

          {/* Specializations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specializations.map((spec, i) => (
              <m.div key={spec.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}>
                <GlassmorphismCard className="p-6 h-full">
                  <div className="text-xl font-bold text-white/20 mb-3 font-mono">{spec.icon}</div>
                  <h3 className="text-base font-bold text-white mb-2">{spec.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{spec.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {spec.skills.map((s) => (
                      <Badge key={s} variant="outline" className="border-white/10 text-gray-400 bg-white/[0.03] text-[11px]">{s}</Badge>
                    ))}
                  </div>
                </GlassmorphismCard>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-20 px-4 sm:px-6 relative">
        <SectionDivider />
        <div className="max-w-4xl mx-auto">
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 border border-purple-500/20 flex items-center justify-center shrink-0">
              <GraduationCap size={18} className="text-purple-400" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Education</h2>
              <p className="text-gray-500 text-sm mt-0.5">Academic background in Computer Science and Applications</p>
            </div>
          </m.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <m.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${edu.accent}`} />
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${edu.iconBg} border border-white/10 flex items-center justify-center shrink-0`}>
                    <edu.icon size={20} className={edu.iconColor} />
                  </div>
                  <GraduationCap size={20} className="text-purple-400 mt-1 shrink-0" />
                </div>
                <h3 className="text-white font-bold text-base leading-snug mb-2">{edu.degree}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{edu.institution}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500">{edu.period}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    edu.status === "Ongoing"
                      ? "bg-blue-500/15 border border-blue-500/30 text-blue-300"
                      : "bg-green-500/15 border border-green-500/30 text-green-300"
                  }`}>{edu.status}</span>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-4 sm:px-6 relative">
        <SectionDivider />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-bold mb-5 text-white tracking-tight">
              <span className="bg-gradient-to-r from-white via-purple-100 to-gray-400 bg-clip-text text-transparent">Get In Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Have a project in mind? I would love to hear about it.
            </p>
          </m.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Info */}
            <m.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-4">
              <GlassmorphismCard className="p-6">
                <h3 className="text-lg font-bold text-white mb-5">Contact Info</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, color: "bg-blue-600", label: "Email", value: "mastersidhh@gmail.com", href: "mailto:mastersidhh@gmail.com" },
                    { icon: Phone, color: "bg-green-600", label: "Phone", value: "+91 77356 24830", href: "tel:+917735624830" },
                    { icon: MapPin, color: "bg-purple-600", label: "Location", value: "Bhubaneswar, Odisha", href: null },
                    { icon: Clock, color: "bg-orange-600", label: "Availability", value: "Open to opportunities", href: null },
                  ].map(({ icon: Icon, color, label, value, href }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className={`${color} p-2.5 rounded-lg shrink-0`}><Icon size={16} className="text-white" /></div>
                      <div>
                        <p className="text-gray-500 text-xs">{label}</p>
                        {href
                          ? <a href={href} className="text-white text-sm hover:text-blue-400 transition-colors">{value}</a>
                          : <p className="text-white text-sm">{value}</p>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-white/10 flex gap-3">
                  <a href="https://linkedin.com/in/sidhartha-sahoo" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-[#0077b5]/20 hover:border-[#0077b5]/40 transition-all text-xs">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                  <a href="https://www.instagram.com/pixa_arth01?igsh=MWpwbjA5MjB6Y3N3NQ==" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-pink-600/20 hover:border-pink-600/40 transition-all text-xs">
                    <Instagram size={14} /> Instagram
                  </a>
                </div>
              </GlassmorphismCard>
            </m.div>

            {/* Form */}
            <m.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3">
              <GlassmorphismCard className="p-6">
                <h3 className="text-lg font-bold text-white mb-5">Send a Message</h3>
                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-name" className="text-xs text-gray-400 mb-1.5 block font-medium">Name *</label>
                      <Input id="c-name" name="name" required placeholder="Your name"
                        className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-600 rounded-xl focus-visible:ring-blue-500/30 focus-visible:border-blue-500/50 h-11" />
                    </div>
                    <div>
                      <label htmlFor="c-email" className="text-xs text-gray-400 mb-1.5 block font-medium">Email *</label>
                      <Input id="c-email" name="email" type="email" required placeholder="you@example.com"
                        className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-600 rounded-xl focus-visible:ring-blue-500/30 focus-visible:border-blue-500/50 h-11" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="c-type" className="text-xs text-gray-400 mb-1.5 block font-medium">Project Type</label>
                    <select id="c-type" name="project-type"
                      className="w-full bg-white/[0.03] border border-white/10 text-white rounded-xl px-3 py-2.5 h-11 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all text-sm">
                      <option value="" className="bg-gray-900 text-gray-400">Select project type</option>
                      {["Logo & Brand Identity", "Social Media Design", "Video Editing", "Motion Graphics", "Cinematography / Shoot", "Color Grading & Retouching", "Other"].map(o => (
                        <option key={o} value={o.toLowerCase().replace(/\W+/g, "-")} className="bg-gray-900">{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="c-timeline" className="text-xs text-gray-400 mb-1.5 block font-medium">Timeline</label>
                    <Input id="c-timeline" name="timeline" placeholder="e.g. 1 week, ASAP, by June 30"
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-600 rounded-xl focus-visible:ring-blue-500/30 focus-visible:border-blue-500/50 h-11" />
                  </div>
                  <div>
                    <label htmlFor="c-msg" className="text-xs text-gray-400 mb-1.5 block font-medium">Message *</label>
                    <Textarea id="c-msg" name="message" required rows={4} placeholder="Tell me about your project..."
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-600 rounded-xl focus-visible:ring-blue-500/30 focus-visible:border-blue-500/50 resize-none p-3" />
                  </div>
                  <Button type="submit" size="lg"
                    className="w-full bg-white text-black hover:bg-gray-100 rounded-full h-12 text-sm font-bold shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.02] cursor-pointer">
                    <Send className="mr-2" size={16} /> Send Message
                  </Button>
                </form>
              </GlassmorphismCard>
            </m.div>
          </div>
        </div>
      </section>
    </div>
  );
}
