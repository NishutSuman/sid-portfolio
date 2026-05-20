import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline tracking-tight ${className}`}>
      <span
        className={`${dancingScript.className} text-[1.15em] bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent leading-none`}
      >
        master
      </span>
      <span className="font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-none">
        Sidhh
      </span>
    </span>
  );
}
