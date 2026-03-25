import { useState } from "react";
import FloatingInput from "../components/FloatingInput";
import { PrimaryButton } from "../components/buttons";

const PURPLE = "#6C25FF";

export default function Register({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const set = (field) => (val) => setForm((f) => ({ ...f, [field]: val }));

  const isValid = form.name && form.phone && form.email && form.password && form.agency;

  return (
    <div style={{ flex: 1, padding: "32px 24px", overflowY: "auto" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 24px", color: "#111", lineHeight: 1.3 }}>
        Create your<br />PopX account
      </h2>

      <FloatingInput label="Full Name"       value={form.name}     onChange={set("name")}     required />
      <FloatingInput label="Phone number"    value={form.phone}    onChange={set("phone")}    required />
      <FloatingInput label="Email address"   value={form.email}    onChange={set("email")}    required />
      <FloatingInput label="Password" type="password" value={form.password} onChange={set("password")} required />
      <FloatingInput label="Company name"    value={form.company}  onChange={set("company")} />

      <p style={{ fontSize: 14, color: "#111", margin: "8px 0 12px" }}>
        Are you an Agency?<span style={{ color: "red", marginLeft: 2 }}>*</span>
      </p>
      <div style={{ display: "flex", gap: 28, marginBottom: 28 }}>
        {["Yes", "No"].map((opt) => (
          <label key={opt} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 14 }}>
            <input
              type="radio"
              name="agency"
              checked={form.agency === opt.toLowerCase()}
              onChange={() => setForm((f) => ({ ...f, agency: opt.toLowerCase() }))}
              style={{ accentColor: PURPLE, width: 18, height: 18 }}
            />
            {opt}
          </label>
        ))}
      </div>

      <PrimaryButton onClick={() => isValid && onSubmit()}>
        Create Account
      </PrimaryButton>
    </div>
  );
}