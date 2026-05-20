import {
  Award,
  Camera,
  Film,
  Scissors,
  Sparkles,
  Users,
  Zap,
  Brush,
  Monitor,
  Image,
} from "lucide-react";

export const videoEditingSkills = [
  {
    name: "Adobe Photoshop",
    image_link: "/tools/Adobe_Photoshop_CC.svg",
    icon: Image,
    description:
      "Photo retouching, thumbnail design, digital art, and advanced compositing for print and digital media.",
    color: "text-cyan-400",
  },
  {
    name: "Adobe Illustrator",
    image_link: "/tools/Adobe_Illustrator_CC.svg",
    icon: Brush,
    description:
      "Vector logo creation, brand identity systems, and scalable graphic assets for any medium.",
    color: "text-orange-400",
  },
  {
    name: "Adobe Premiere Pro",
    image_link: "/tools/Adobe_Premiere_Pro_CC.svg",
    icon: Scissors,
    description:
      "Professional video editing, multicam sync, dynamic transitions, and workflow optimization.",
    color: "text-purple-400",
  },
  {
    name: "DaVinci Resolve",
    image_link: "/tools/DaVinci_Resolve_Studio.svg",
    icon: Film,
    description:
      "Professional color grading, cinematic LUT creation, and end-to-end post-production.",
    color: "text-amber-400",
  },
  {
    name: "Adobe After Effects",
    image_link: "/tools/Adobe_After_Effects_CC.svg",
    icon: Sparkles,
    description:
      "Motion graphics, animated lower-thirds, logo reveals, and advanced visual effects.",
    color: "text-blue-400",
  },
  {
    name: "Adobe Lightroom",
    image_link: "/tools/Adobe_Lightroom_CC.svg",
    icon: Monitor,
    description:
      "Photo culling, batch editing, cinematic color correction, and professional photo retouching.",
    color: "text-green-400",
  },
];

export const specializations = [
  {
    title: "Brand Identity & Logo Design",
    skills: ["Logo Design", "Brand Guidelines", "Typography", "Color Theory", "Visual Identity"],
    icon: "✦",
    description:
      "Creating distinctive brand identities that communicate personality and build lasting recognition.",
  },
  {
    title: "Social Media Content",
    skills: ["Instagram Posts", "Story Design", "Reel Covers", "Ad Creatives", "Campaign Assets"],
    icon: "◈",
    description:
      "Scroll-stopping social media visuals designed to grow audiences and drive engagement.",
  },
  {
    title: "Video Editing & Post",
    skills: [
      "Short-form Editing",
      "Long-form Editing",
      "Audio Sync",
      "Transitions",
      "Color Grade",
    ],
    icon: "▶",
    description:
      "Polished video production for events, brands, social media, and promotional content.",
  },
  {
    title: "Motion Graphics",
    skills: [
      "Logo Animation",
      "Lower Thirds",
      "Kinetic Typography",
      "Animated Intros",
      "Promo Animations",
    ],
    icon: "◎",
    description:
      "Dynamic animations that add professionalism and visual energy to every piece of content.",
  },
  {
    title: "Cinematography",
    skills: [
      "Event Shoots",
      "Product Shoots",
      "Travel Films",
      "Mirrorless & DSLR",
      "Lighting Setup",
    ],
    icon: "⬡",
    description:
      "Capturing compelling footage with a cinematic eye, from events to product showcases.",
  },
  {
    title: "Color Grading & Retouching",
    skills: ["Cinematic Looks", "Color Matching", "LUT Creation", "Lightroom Presets", "Photo Retouching"],
    icon: "◐",
    description:
      "Professional color work that elevates both photography and video to a premium, polished finish.",
  },
];

export const achievements = [
  {
    title: "4 Years Experience",
    description:
      "Professional creative career spanning graphic design, video editing, and cinematography.",
    icon: Award,
    color: "text-yellow-400",
  },
  {
    title: "Multi-Disciplinary",
    description:
      "Rare combination of design, video post-production, and on-camera cinematography skills.",
    icon: Camera,
    color: "text-blue-400",
  },
  {
    title: "Agency & Workshop Experience",
    description:
      "Worked with DigiKite Infomatrix, Digitiall Pvt. Ltd., and led photography & design workshops.",
    icon: Users,
    color: "text-green-400",
  },
  {
    title: "Fast Turnaround",
    description:
      "Delivering high-quality creative work efficiently without compromising on detail or quality.",
    icon: Zap,
    color: "text-purple-400",
  },
];

export const workflow = [
  {
    step: "01",
    title: "Discovery & Brief",
    description:
      "Understanding your brand, goals, target audience, and project vision through a detailed creative brief.",
  },
  {
    step: "02",
    title: "Concept & Mood Board",
    description:
      "Developing visual concepts, style references, and a creative direction aligned with your brand identity.",
  },
  {
    step: "03",
    title: "Creation",
    description:
      "Designing, shooting, or editing to bring the concept to life with precision and creative craftsmanship.",
  },
  {
    step: "04",
    title: "Refinement",
    description:
      "Applying color grading, typography, motion, and finishing touches that elevate the final output.",
  },
  {
    step: "05",
    title: "Review & Revisions",
    description:
      "Presenting the work for your feedback and implementing revisions until it perfectly matches your vision.",
  },
  {
    step: "06",
    title: "Final Delivery",
    description:
      "Exporting in all required formats and delivering organized, ready-to-use files for every platform.",
  },
];
