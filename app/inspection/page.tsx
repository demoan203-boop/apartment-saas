export default function InspectionPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
              시설점검
            </h1>

            <p style={{ color: "#555", margin: 0 }}>
              아파트 주요 시설의 점검 현황을 확인하고 기록하는 화면입니다.
            </p>
          </div>

          <a
            href="/dashboard"
            style={{
              padding: "10px 16px",
              background: "#2563eb",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            대시보드로 이동
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
              소방 시설
            </h2>
            <p>점검 상태: 정상</p>
            <p>최근 점검일: 2026-03-12</p>
            <button
              style={{
                marginTop: "15px",
                padding: "10px 16px",
                border: "none",
                borderRadius: "8px",
                background: "#0070f3",
                color: "white",
                cursor: "pointer",
              }}
            >
              점검 기록 보기
            </button>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
              승강기
            </h2>
            <p>점검 상태: 점검 필요</p>
            <p>최근 점검일: 2026-03-10</p>
            <button
              style={{
                marginTop: "15px",
                padding: "10px 16px",
                border: "none",
                borderRadius: "8px",
                background: "#0070f3",
                color: "white",
                cursor: "pointer",
              }}
            >
              점검 기록 보기
            </button>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
              전기 설비
            </h2>
            <p>점검 상태: 정상</p>
            <p>최근 점검일: 2026-03-11</p>
            <button
              style={{
                marginTop: "15px",
                padding: "10px 16px",
                border: "none",
                borderRadius: "8px",
                background: "#0070f3",
                color: "white",
                cursor: "pointer",
              }}
            >
              점검 기록 보기
            </button>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
              급수 설비
            </h2>
            <p>점검 상태: 정상</p>
            <p>최근 점검일: 2026-03-09</p>
            <button
              style={{
                marginTop: "15px",
                padding: "10px 16px",
                border: "none",
                borderRadius: "8px",
                background: "#0070f3",
                color: "white",
                cursor: "pointer",
              }}
            >
              점검 기록 보기
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}