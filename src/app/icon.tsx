import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)",
          borderRadius: 14,
          color: "white",
          fontSize: 44,
          fontWeight: 900,
          letterSpacing: -2,
          paddingBottom: 4,
        }}
      >
        S
      </div>
    ),
    size
  );
}
