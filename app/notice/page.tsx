export default function NoticePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
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
              공지사항
            </h1>
            <p style={{ color: "#555", margin: 0 }}>
              단지 공지와 안내문을 등록하고 관리하는 페이지입니다.
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
            background: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>공지 목록</h2>
          <ul style={{ lineHeight: 1.8, paddingLeft: "20px" }}>
            <li>3월 정기 소독 일정 안내</li>
            <li>지하주차장 조명 교체 작업 공지</li>
            <li>승강기 정기 점검 안내</li>
          </ul>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>공지 등록</h2>
          <div style={{ display: "grid", gap: "12px" }}>
            <input
              placeholder="공지 제목"
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />
            <textarea
              placeholder="공지 내용을 입력하세요"
              rows={6}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                resize: "vertical",
              }}
            />
            <button
              style={{
                padding: "12px 16px",
                border: "none",
                borderRadius: "8px",
                background: "#2563eb",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              공지 등록
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}