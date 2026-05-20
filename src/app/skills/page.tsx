"use client";

import { m } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import GlassmorphismCard from "@/components/glassmorphism-card";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FileSearch,
  Lightbulb,
  Brush,
  Sparkles,
  Eye,
  Send,
  Star,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import {
  videoEditingSkills,
  specializations,
  achievements,
  workflow,
} from "@/db/skills";

const iconMap = [
  { icon: <FileSearch size={20} />, bg: "#0ea5e9" },
  { icon: <Lightbulb size={20} />, bg: "#a855f7" },
  { icon: <Brush size={20} />, bg: "#f97316" },
  { icon: <Sparkles size={20} />, bg: "#10b981" },
  { icon: <Eye size={20} />, bg: "#f43f5e" },
  { icon: <Send size={20} />, bg: "#6366f1" },
];

const toolIcons: Record<string, string> = {
  "Adobe Photoshop": "🖼",
  "Adobe Illustrator": "✏️",
  "Adobe Premiere Pro": "🎬",
  "DaVinci Resolve": "🎞",
  "Adobe After Effects": "✨",
  "Adobe Lightroom": "📷",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-24 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/15 blur-[100px] rounded-full pointer-events-none" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-0 md:mt-16 mb-6 text-white tracking-tight relative z-10">
            <span className="bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            With 4 years of professional creative experience, I bring technical precision and
            artistic vision across graphic design, video post-production, and cinematography.
          </p>
        </m.div>

        {/* Tools */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
            Tools & Software
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoEditingSkills.map((skill, index) => (
              <m.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassmorphismCard className="p-6 h-full">
                  <div className="flex items-center mb-4 space-x-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-white/5 border border-white/10`}
                    >
                      {toolIcons[skill.name] || "🛠"}
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${skill.color}`}>{skill.name}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </GlassmorphismCard>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Specializations */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
            Creative Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <m.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <GlassmorphismCard className="p-6 h-full">
                  <div className="text-2xl font-bold text-white/20 mb-4 font-mono">
                    {spec.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{spec.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{spec.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {spec.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-white/10 text-gray-300 bg-white/5 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </GlassmorphismCard>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Highlights */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
            Key Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <m.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
              >
                <GlassmorphismCard className="p-6 text-center h-full">
                  <achievement.icon className={`${achievement.color} mx-auto mb-4`} size={32} />
                  <h3 className="text-base font-semibold mb-2 text-white">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </GlassmorphismCard>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Workflow */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
            My Creative Workflow
          </h2>

          <GlassmorphismCard className="p-4 md:p-8">
            <VerticalTimeline animate={true} lineColor="#3b82f6">
              {workflow.map((step, index) => (
                <VerticalTimelineElement
                  key={step.step}
                  className="vertical-timeline-element--work"
                  date={`Step ${step.step}`}
                  contentStyle={{ background: "rgb(30, 41, 59)", color: "#fff" }}
                  contentArrowStyle={{ borderRight: "7px solid rgb(30, 41, 59)" }}
                  iconStyle={{ background: iconMap[index]?.bg || "#3b82f6", color: "#fff" }}
                  icon={iconMap[index]?.icon || <Star size={20} />}
                >
                  <h3 className="vertical-timeline-element-title text-white text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </VerticalTimelineElement>
              ))}

              <VerticalTimelineElement
                iconStyle={{ background: "rgb(34,197,94)", color: "#fff" }}
                icon={<Star size={20} />}
              />
            </VerticalTimeline>
          </GlassmorphismCard>
        </m.div>

        <CTASection
          title="Ready to Work Together?"
          description="Let's discuss your creative project and make something exceptional. I bring design, video, and cinematography skills to every brief."
          buttonText="Start Your Project"
          href="/contact"
        />
      </div>
    </div>
  );
}
