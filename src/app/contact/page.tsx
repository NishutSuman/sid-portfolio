"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Mail, MapPin, Clock, Send, Phone, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const projectType = formData.get("project-type") as string;
    const timeline = formData.get("timeline") as string;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast("Please enter a valid email address.");
      return;
    }

    if (!message || message.length < 30) {
      toast("Message should be at least 30 characters long.");
      return;
    }

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, projectType, timeline }),
    });

    const result = await res.json();

    if (res.ok) {
      toast("Message sent successfully!");
      form.reset();
    } else {
      toast(result.error || "Something went wrong.");
    }
  };

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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/15 blur-[100px] rounded-full pointer-events-none" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-0 md:mt-16 mb-6 text-white tracking-tight relative z-10">
            <span className="bg-gradient-to-r from-white via-purple-100 to-gray-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            Have a project in mind? Whether it's a brand identity, a cinematic shoot, or a video
            edit. I'd love to hear about it.
          </p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:mastersidhh@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      mastersidhh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone / WhatsApp</p>
                    <a
                      href="tel:+917735624830"
                      className="text-white hover:text-green-400 transition-colors"
                    >
                      +91 77356 24830
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Bhubaneswar, Odisha, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-3 rounded-lg shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Availability</p>
                    <p className="text-white">Open to full-time & freelance</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-4">Find me on</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/sidhartha-sahoo-creative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-[#0077b5]/20 hover:border-[#0077b5]/40 transition-all text-sm"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/pixa_arth01?igsh=MWpwbjA5MjB6Y3N3NQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-pink-600/20 hover:border-pink-600/40 transition-all text-sm"
                  >
                    <Instagram size={16} />
                    Instagram
                  </a>
                </div>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard className="p-8">
              <h3 className="text-xl font-semibold mb-5 text-white">Why Hire Me?</h3>
              <div className="space-y-4">
                {[
                  {
                    color: "bg-blue-500",
                    title: "Multi-Disciplinary Creative",
                    desc: "Design, video editing, and cinematography, all under one roof.",
                  },
                  {
                    color: "bg-purple-500",
                    title: "4 Years of Industry Experience",
                    desc: "Agency-trained with a strong portfolio across branding and video.",
                  },
                  {
                    color: "bg-green-500",
                    title: "Quick Turnaround",
                    desc: "Efficient workflows mean fast delivery without sacrificing quality.",
                  },
                  {
                    color: "bg-orange-500",
                    title: "Clear Communication",
                    desc: "Regular updates and transparent process from brief to delivery.",
                  },
                ].map((point) => (
                  <div key={point.title} className="flex items-start space-x-3">
                    <div className={`${point.color} w-2 h-2 rounded-full mt-2 shrink-0`} />
                    <div>
                      <h4 className="font-medium text-white">{point.title}</h4>
                      <p className="text-gray-400 text-sm">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassmorphismCard>
          </m.div>

          {/* Contact Form */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm text-gray-400 mb-2 block font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 rounded-xl focus-visible:ring-blue-500/30 focus-visible:border-blue-500/50 h-12"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm text-gray-400 mb-2 block font-medium"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 rounded-xl focus-visible:ring-blue-500/30 focus-visible:border-blue-500/50 h-12"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project-type"
                    className="text-sm text-gray-400 mb-2 block font-medium"
                  >
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    className="w-full bg-white/[0.03] border border-white/10 text-white rounded-xl px-4 py-3 h-12 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all custom-select"
                  >
                    <option value="" className="bg-gray-900 text-gray-400">
                      Select project type
                    </option>
                    <option value="logo-branding" className="bg-gray-900">
                      Logo & Brand Identity
                    </option>
                    <option value="social-media" className="bg-gray-900">
                      Social Media Design
                    </option>
                    <option value="video-editing" className="bg-gray-900">
                      Video Editing
                    </option>
                    <option value="motion-graphics" className="bg-gray-900">
                      Motion Graphics
                    </option>
                    <option value="cinematography" className="bg-gray-900">
                      Cinematography / Shoot
                    </option>
                    <option value="color-grading" className="bg-gray-900">
                      Color Grading & Retouching
                    </option>
                    <option value="other" className="bg-gray-900">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="text-sm text-gray-400 mb-2 block font-medium"
                  >
                    Timeline
                  </label>
                  <Input
                    id="timeline"
                    name="timeline"
                    type="text"
                    className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 rounded-xl focus-visible:ring-blue-500/30 focus-visible:border-blue-500/50 h-12"
                    placeholder="e.g., 1 week, ASAP, by June 30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm text-gray-400 mb-2 block font-medium"
                  >
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project, goals, and any references you have in mind..."
                    className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 rounded-xl focus-visible:ring-blue-500/30 focus-visible:border-blue-500/50 resize-none p-4"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-black hover:bg-gray-200 rounded-full h-14 text-base font-semibold shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all hover:scale-105 cursor-pointer mt-4"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm text-center">
                  Prefer a direct call?{" "}
                  <a href="tel:+917735624830" className="text-blue-400 hover:text-blue-300">
                    +91 77356 24830
                  </a>
                </p>
              </div>
            </GlassmorphismCard>
          </m.div>
        </div>
      </div>
    </div>
  );
}
