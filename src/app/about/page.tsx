"use client";

import { m } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import CTASection from "@/components/CTASection";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Award,
  Clock,
  Zap,
  Quote,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const workExperience = [
  {
    period: "2024 – Present",
    role: "Cinematographer & Video Editor",
    company: "DigiKite Infomatrix Pvt. Ltd.",
    type: "Full-time",
    color: "border-blue-500/40 bg-blue-500/5",
    dot: "bg-blue-500",
  },
  {
    period: "2022 – 2024",
    role: "Graphic Designer & Video Editor",
    company: "Digitiall Pvt. Ltd.",
    type: "Full-time",
    color: "border-purple-500/40 bg-purple-500/5",
    dot: "bg-purple-500",
  },
  {
    period: "Freelance",
    role: "Photography & Design Workshops",
    company: "Jawahar Navodaya Vidyalaya, Konark, Puri",
    type: "Workshop",
    color: "border-indigo-500/40 bg-indigo-500/5",
    dot: "bg-indigo-500",
  },
  {
    period: "Freelance",
    role: "Photography & Design Workshops",
    company: "Navodaya Leadership Institute, Konark, Puri",
    type: "Workshop",
    color: "border-cyan-500/40 bg-cyan-500/5",
    dot: "bg-cyan-500",
  },
];

const education = [
  {
    period: "2024 – 2026",
    degree: "Masters in Computer Application (MCA)",
    institution: "College of IT and Management, BPUT",
    icon: GraduationCap,
  },
  {
    period: "2019 – 2022",
    degree: "B.Sc. Computer Science",
    institution: "College of Basic Science and Humanities, OUAT, BBSR",
    icon: GraduationCap,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center pt-32 pb-12 md:py-24 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mt-0 md:mt-20 mb-3 text-white tracking-tight">
            The Creative Behind the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Vision
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Graphic Designer · Video Editor · Cinematographer · Visual Storyteller
          </p>
        </m.div>

        <BentoGrid className="max-w-6xl mx-auto mb-20">
          {/* Profile Hero Card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2"
          >
            <BentoGridItem
              title=""
              description=""
              header={
                <div className="relative w-full h-full min-h-[28rem] md:min-h-[16rem] rounded-xl overflow-hidden">
                  {/* Gradient background as profile placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-indigo-900/40 to-purple-900/60" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Avatar Placeholder */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-black mb-6 ring-4 ring-white/10 shadow-2xl">
                      SS
                    </div>
                    <p className="text-gray-300 text-xs font-medium tracking-[0.2em] uppercase mb-1">
                      Replace with your photo
                    </p>
                    <p className="text-gray-500 text-xs">(Add profile image to /public/sidhartha.jpg)</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                  {/* Name Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <m.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter"
                    >
                      SIDHARTHA
                      <br />
                      <span className="text-blue-500">SAHOO</span>
                    </m.div>
                    <div className="h-1 w-16 md:w-20 bg-purple-500 mt-4 rounded-full" />
                    <p className="text-gray-300 mt-4 text-xs md:text-sm font-medium tracking-wide uppercase">
                      Graphic Designer · Video Editor · Cinematographer
                    </p>
                  </div>
                </div>
              }
              className="h-full shadow-2xl shadow-blue-900/10"
              icon={null}
            />
          </m.div>

          {/* Experience Years */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <BentoGridItem
              title="Experience"
              description="Years of creative excellence."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-black to-neutral-900 border border-white/10 flex-col items-center justify-center relative overflow-hidden group-hover:border-blue-500/30 transition-colors py-8 md:py-0">
                  <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />
                  <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-900 z-10">
                    4+
                  </span>
                  <div className="text-blue-500/50 text-xs font-mono uppercase tracking-[0.2em] z-10 mt-2">
                    Years Active
                  </div>
                </div>
              }
              className="h-full"
              icon={<Clock className="h-4 w-4 text-blue-500" />}
            />
          </m.div>

          {/* Location */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <BentoGridItem
              title="Based In"
              description="Available for remote work."
              header={
                <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[#0a0a0a] overflow-hidden items-center justify-center border border-white/5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center animate-pulse">
                      <MapPin className="text-blue-500" size={32} />
                    </div>
                    <div className="mt-2 bg-blue-500/20 backdrop-blur text-blue-300 px-3 py-1 rounded text-xs font-bold border border-blue-500/30">
                      BHUBANESWAR, ODISHA
                    </div>
                  </div>
                </div>
              }
              className="h-full"
              icon={<MapPin className="h-4 w-4 text-indigo-500" />}
            />
          </m.div>

          {/* Philosophy */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <BentoGridItem
              title="Philosophy"
              description="Design is communication."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/5 p-6 items-center">
                  <Quote className="text-white/10 absolute top-4 right-4" size={48} />
                  <p className="text-gray-300 italic text-sm md:text-base leading-relaxed relative z-10">
                    "Every pixel, every frame, every shot is a decision. Great design doesn't just
                    look good. It makes people feel something and take action."
                  </p>
                </div>
              }
              className="h-full"
              icon={<Award className="h-4 w-4 text-yellow-500" />}
            />
          </m.div>

          {/* Socials */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-1"
          >
            <BentoGridItem
              title="Connect"
              description=""
              header={
                <div className="flex flex-1 h-full w-full items-center justify-around px-4 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-xl border border-white/5 py-4 md:py-0 min-h-[5rem]">
                  <a
                    href="https://www.linkedin.com/in/sidhartha-sahoo-creative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full hover:bg-[#0077b5] hover:scale-110 transition-all duration-300 text-white"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/pixa_arth01?igsh=MWpwbjA5MjB6Y3N3NQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full hover:bg-pink-600 hover:scale-110 transition-all duration-300 text-white"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="mailto:mastersidhh@gmail.com"
                    className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300 text-white"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              }
              className="h-full"
              icon={<Zap className="h-4 w-4 text-white" />}
            />
          </m.div>
        </BentoGrid>

        {/* Professional Summary */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Professional Summary</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-10">
            <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
            <p className="text-gray-300 text-lg leading-relaxed text-center relative z-10">
              Creative Graphic Designer & Video Editor with{" "}
              <span className="text-white font-semibold">4 years of experience</span> in branding,
              social media content, event promotions, and cinematography. Skilled in creating
              engaging visuals, cinematic edits, and professional digital content that{" "}
              <span className="text-blue-400 font-semibold">
                enhances brand identity and audience engagement
              </span>
              .
            </p>
          </div>
        </m.div>

        {/* Work Experience */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Work Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {workExperience.map((job, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative rounded-xl border p-6 ${job.color} backdrop-blur-sm`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${job.dot}`} />
                    <h3 className="text-white font-bold text-lg">{job.role}</h3>
                  </div>
                  <div className="flex items-center gap-2 ml-6 sm:ml-0">
                    <span className="text-xs font-medium text-gray-400 border border-white/10 rounded-full px-3 py-1">
                      {job.type}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">{job.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-6">
                  <Briefcase size={14} className="text-gray-500 shrink-0" />
                  <p className="text-gray-400 text-sm">{job.company}</p>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Education */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Education</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {education.map((edu, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <GraduationCap size={18} className="text-blue-400 shrink-0" />
                    <h3 className="text-white font-bold text-lg">{edu.degree}</h3>
                  </div>
                  <span className="text-xs text-gray-500 font-mono ml-7 sm:ml-0">{edu.period}</span>
                </div>
                <p className="text-gray-400 text-sm ml-7">{edu.institution}</p>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Additional Skills */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Additional Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "SEO",
                "Google Analytics",
                "Google AdWords",
                "Graphic Design",
                "English",
                "German",
                "Hindi",
                "Event Promotion",
                "Content Strategy",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300 hover:border-blue-500/50 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </m.div>

        <CTASection
          title="Ready to Work Together?"
          description="Let's build something that looks incredible, tells your story, and drives real results."
          buttonText="Start Collaboration"
          href="/contact"
        />
      </div>
    </div>
  );
}
