import { PrimaryButton, SecondaryButton } from "../components/buttons";


export default function Home({ onRegister, onLogin }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 24px 40px" }}>
      

      <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 8px", color: "#111" }}>
        Welcome to PopX
      </h1>
      <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 32px", lineHeight: 1.6 }}>
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>

      <PrimaryButton onClick={onRegister}>Create Account</PrimaryButton>
      <div style={{ marginTop: 12 }}>
        <SecondaryButton onClick={onLogin}>Already Registered? Login</SecondaryButton>
      </div>
    </div>
  );
}