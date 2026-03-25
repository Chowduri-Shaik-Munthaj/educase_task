const PURPLE = "#6C25FF";

export default function Account() {
  return (
    <div style={{ flex: 1, display: "flex" ,flexDirection: "column" }}>
      <div style={{ padding: "20px 20px 20px 20px",backgroundColor:"#fff", borderBlock: "1px solid #e5e7eb" }}>
        <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: "#111" }}>Account Settings</p>
      </div>

      <div style={{ padding: "24px 20px", background: "#f9fafb", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
          <div style={{ position: "relative" }}>
            <img
              src="https://i.pravatar.cc/80?img=47"
              alt="profile"
              style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: PURPLE,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
          </div>

          <div>
            <p style={{ margin: 0, fontWeight: 600, fontSize: 15, color: "#111" }}>Marry Doe</p>
            <p style={{ margin: "2px 0 0", fontSize: 13, color: "#6b7280" }}>Marry@Gmail.Com</p>
          </div>
        </div>

        <div style={{ paddingTop: 10 }}>
  <p
    style={{
      fontSize: 13,
      color: "#374151",
      lineHeight: 1.7,
      marginBottom: 12
    }}
  >
    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod
    Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
  </p>

  {/* Dashed Line BELOW */}
  <div
    style={{
      borderBottom: "1px dashed #8e9094"
    }}
  />
</div>
      </div>
    </div>
  );
}