export default function AdminDashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
            <h1 style={{ margin: 0, fontSize: "32px" }}>관리자 대시보드</h1>
            <p style={{ color: "#555", marginTop: "8px" }}>
              직원 근무, 배치, 계정, 비밀번호를 관리합니다.
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
            일반 대시보드
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div style={cardStyle}>
            <div style={labelStyle}>전체 직원</div>
            <div style={valueStyle}>8명</div>
          </div>

          <div style={cardStyle}>
            <div style={labelStyle}>오늘 근무</div>
            <div style={valueStyle}>5명</div>
          </div>

          <div style={cardStyle}>
            <div style={labelStyle}>휴무</div>
            <div style={valueStyle}>2명</div>
          </div>

          <div style={cardStyle}>
            <div style={labelStyle}>야간근무</div>
            <div style={valueStyle}>1명</div>
          </div>
        </div>

        <div
          style={{
            ...cardStyle,
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "16px" }}>빠른 이동</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            <a href="/admin/schedule" style={quickLinkStyle}>
              근무 스케줄 관리
            </a>
            <a href="/admin/staff" style={quickLinkStyle}>
              직원 배치 관리
            </a>
            <a href="/admin/accounts" style={quickLinkStyle}>
              직원 계정 관리
            </a>
            <a href="/admin/passwords" style={quickLinkStyle}>
              비밀번호 관리
            </a>
          </div>
        </div>

        <div
          style={{
            ...cardStyle,
            overflowX: "auto",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "16px" }}>직원 현황</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "800px",
            }}
          >
            <thead>
              <tr style={{ background: "#f1f5f9" }}>
                <th style={thStyle}>이름</th>
                <th style={thStyle}>직책</th>
                <th style={thStyle}>근무형태</th>
                <th style={thStyle}>배치</th>
                <th style={thStyle}>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>김관리</td>
                <td style={tdStyle}>관리소장</td>
                <td style={tdStyle}>주간</td>
                <td style={tdStyle}>관리사무소</td>
                <td style={tdStyle}>근무중</td>
              </tr>
              <tr>
                <td style={tdStyle}>이점검</td>
                <td style={tdStyle}>시설관리</td>
                <td style={tdStyle}>주간</td>
                <td style={tdStyle}>기계실/점검</td>
                <td style={tdStyle}>근무중</td>
              </tr>
              <tr>
                <td style={tdStyle}>박민원</td>
                <td style={tdStyle}>민원담당</td>
                <td style={tdStyle}>주간</td>
                <td style={tdStyle}>민원창구</td>
                <td style={tdStyle}>근무중</td>
              </tr>
              <tr>
                <td style={tdStyle}>최야간</td>
                <td style={tdStyle}>경비/야간</td>
                <td style={tdStyle}>야간</td>
                <td style={tdStyle}>정문</td>
                <td style={tdStyle}>대기</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

const labelStyle = {
  color: "#666",
  marginBottom: "8px",
};

const valueStyle = {
  fontSize: "24px",
  fontWeight: "bold",
};

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

const thStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "left" as const,
};

const tdStyle = {
  border: "1px solid #ddd",
  padding: "12px",
};