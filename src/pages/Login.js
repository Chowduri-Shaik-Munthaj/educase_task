import { useState } from "react";
import FloatingInput from "../components/FloatingInput";
import { PrimaryButton } from "../components/buttons";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div style={{ flex: 1, padding: "40px 24px 32px" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 8px", color: "#111", lineHeight: 1.3 }}>
        Signin to your<br />PopX account
      </h2>
      <p style={{ fontSize: 14, color: "#9ca3af", margin: "0 0 28px", lineHeight: 1.6 }}>
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>

      <FloatingInput label="Email Address" value={email}    onChange={setEmail}    required />
      <FloatingInput label="Password" type="password" value={password} onChange={setPassword} required />

      <div style={{ marginTop: 8 }}>
        <PrimaryButton onClick={() => isValid && onLogin()} disabled={!isValid}>
          Login
        </PrimaryButton>
      </div>
    </div>
  );
}