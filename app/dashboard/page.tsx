export default function DashboardPage() {
  const menuStyle = {
    color: "white",
    textDecoration: "none",
    padding: "10px 12px",
    borderRadius: "8px",
    display: "block",
  } as const;

  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  } as const;

  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <aside
        style={{
          width: "220px",
          background: "#1e293b",
          color: "white",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>관리시스템</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <a href="/dashboard" style={menuStyle}>
            대시보드
          </a>
          <a href="/inspection" style={menuStyle}>
            시설점검
          </a>
          <a href="/maintenance" style={menuStyle}>
            유지보수
          </a>
          <a href="/complaints" style={menuStyle}>
            민원관리
          </a>
          <a href="/residents" style={menuStyle}>
            입주민관리
          </a>
          <a href="/inventory" style={menuStyle}>
            시설자산·재고관리
          </a>
          <a href="/notice" style={menuStyle}>
            공지사항
          </a>
          <a href="/admin" style={menuStyle}>
            관리자 페이지
          </a>
        </nav>
      </aside>

      <section
        style={{
          flex: 1,
          padding: "40px",
          background: "#f1f5f9",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          관리사무소 대시보드
        </h1>

        <p style={{ color: "#555", marginBottom: "24px" }}>
          주요 업무 현황을 확인하세요.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>오늘 점검</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: 0 }}>4건</p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>미처리 민원</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: 0 }}>2건</p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>유지보수 진행</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: 0 }}>3건</p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>신규입주</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: 0 }}>1세대</p>
          </div>
        </div>

        <div
          style={{
            ...cardStyle,
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "16px" }}>빠른 이동</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "12px",
            }}
          >
            <a href="/inspection" style={quickLinkStyle}>
              시설점검
            </a>
            <a href="/maintenance" style={quickLinkStyle}>
              유지보수
            </a>
            <a href="/complaints" style={quickLinkStyle}>
              민원관리
            </a>
            <a href="/residents" style={quickLinkStyle}>
              입주민관리
            </a>
            <a href="/inventory" style={quickLinkStyle}>
              시설자산·재고관리
            </a>
            <a href="/notice" style={quickLinkStyle}>
              공지사항
            </a>
            <a href="/admin" style={quickLinkStyle}>
              관리자 페이지
            </a>
          </div>
        </div>

        <div
          style={{
            ...cardStyle,
            padding: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <h2 style={{ margin: 0 }}>최근 공지사항</h2>

            <a
              href="/notice"
              style={{
                textDecoration: "none",
                color: "#2563eb",
                fontWeight: "bold",
              }}
            >
              전체보기
            </a>
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            <div style={noticeItemStyle}>
              <div style={{ fontWeight: "bold", marginBottom: "6px" }}>
                3월 정기 소독 일정 안내
              </div>
              <div style={{ color: "#666", fontSize: "14px", marginBottom: "6px" }}>
                2026-03-12
              </div>
              <div style={{ color: "#444" }}>
                단지 전체 정기 소독이 3월 15일 오전 10시부터 진행됩니다.
              </div>
            </div>

            <div style={noticeItemStyle}>
              <div style={{ fontWeight: "bold", marginBottom: "6px" }}>
                지하주차장 조명 교체 작업 공지
              </div>
              <div style={{ color: "#666", fontSize: "14px", marginBottom: "6px" }}>
                2026-03-11
              </div>
              <div style={{ color: "#444" }}>
                지하주차장 B구역 조명 교체 작업이 금일 오후 2시부터 진행됩니다.
              </div>
            </div>

            <div style={noticeItemStyle}>
              <div style={{ fontWeight: "bold", marginBottom: "6px" }}>
                승강기 정기 점검 안내
              </div>
              <div style={{ color: "#666", fontSize: "14px", marginBottom: "6px" }}>
                2026-03-09
              </div>
              <div style={{ color: "#444" }}>
                101동, 102동 승강기 정기 점검이 순차적으로 실시됩니다.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const quickLinkStyle = {
  display: "block",
  padding: "14px 16px",
  background: "#e2e8f0",
  color: "#111",
  textDecoration: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  textAlign: "center" as const,
};

const noticeItemStyle = {
  padding: "16px",
  border: "1px solid #e5e7eb",
  borderRadius: "10px",
  background: "#f8fafc",
};