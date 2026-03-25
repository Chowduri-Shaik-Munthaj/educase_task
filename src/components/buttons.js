const PURPLE = "#6C25FF";
const PURPLE_LIGHT = "#E5D8FF";

export function PrimaryButton({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "100%",
        padding: 16,
        borderRadius: 8,
        border: "none",
        background: disabled ? "#d1d5db" : PURPLE,
        color: disabled ? "#666" : "#fff",
        fontWeight: 600,
        fontSize: 15,
        cursor: disabled ? "not-allowed" : "pointer",
        fontFamily: "inherit",
      }}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: 16,
        borderRadius: 8,
        border: "none",
        background: PURPLE_LIGHT,
        color: "#111",
        fontWeight: 600,
        fontSize: 15,
        cursor: "pointer",
        fontFamily: "inherit",
      }}
    >
      {children}
    </button>
  );
}