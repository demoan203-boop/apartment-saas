export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "sans-serif",
        background: "#f3f4f6",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        아파트 관리 플랫폼
      </h1>

      <p style={{ marginBottom: "20px", color: "#555" }}>
        스마트 아파트 관리 시스템
      </p>

      <div style={{ display: "flex", gap: "12px" }}>
        <a
          href="/login"
          style={{
            padding: "12px 24px",
            background: "#2563eb",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          로그인
        </a>

        </div>
      
    </main>
  );
}