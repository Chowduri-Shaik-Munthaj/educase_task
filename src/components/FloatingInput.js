import { useState } from "react";

const PURPLE = "#6C25FF";

export default function FloatingInput({ label, type = "text", value, onChange, required }) {
  const [focused, setFocused] = useState(false);
  const floated = true;

  return (
    <div style={{ position: "relative", marginBottom: 18 }}>
      <label
        style={{
          position: "absolute",
          left: 12,
          top: floated ? -9 : "50%",
          transform: floated ? "none" : "translateY(-50%)",
          fontSize: floated ? 11 : 14,
          color: floated ? PURPLE : "#aab0b8",
          background: floated ? "#fff" : "transparent",
          padding: floated ? "0 4px" : "0",
          transition: "top 0.18s ease, font-size 0.18s ease, color 0.18s ease, background 0.18s ease, transform 0.18s ease",
          pointerEvents: "none",
          zIndex: 1,
          fontWeight: floated ? 500 : 400,
          lineHeight: 1,
        }}
      >
        {label}
        {required && <span style={{ color: "red", marginLeft: 2 }}>*</span>}
      </label>

      <input
        type={type}
        value={value}
        placeholder={`Enter ${label}`}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "14px 12px",
          fontSize: 14,
          border: `1.5px solid ${focused ? PURPLE : "#e5e7eb"}`,
          borderRadius: 8,
          outline: "none",
          background: "#fff",
          boxSizing: "border-box",
          color: "#111",
          transition: "border-color 0.15s",
        }}
      />
    </div>
  );
}