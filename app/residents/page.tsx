export default function ResidentsPage() {
  const residents = [
    {
      building: "101동",
      unit: "101호",
      resident: "김민수",
      status: "거주중",
      moveIn: "2026-03-01",
      moveOut: "-",
      note: "정상 거주",
    },
    {
      building: "101동",
      unit: "102호",
      resident: "이서연",
      status: "신규입주",
      moveIn: "2026-03-10",
      moveOut: "-",
      note: "입주 완료",
    },
    {
      building: "101동",
      unit: "103호",
      resident: "박지훈",
      status: "이사예정",
      moveIn: "2024-02-01",
      moveOut: "2026-03-20",
      note: "퇴거 예정",
    },
    {
      building: "102동",
      unit: "201호",
      resident: "-",
      status: "공실",
      moveIn: "-",
      moveOut: "-",
      note: "신규 모집중",
    },
    {
      building: "102동",
      unit: "202호",
      resident: "최유진",
      status: "거주중",
      moveIn: "2025-11-15",
      moveOut: "-",
      note: "정상 거주",
    },
    {
      building: "103동",
      unit: "301호",
      resident: "정하늘",
      status: "거주중",
      moveIn: "2025-08-01",
      moveOut: "-",
      note: "장기 거주",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "거주중":
        return {
          background: "#dcfce7",
          color: "#166534",
        };
      case "신규입주":
        return {
          background: "#dbeafe",
          color: "#1d4ed8",
        };
      case "이사예정":
        return {
          background: "#fef3c7",
          color: "#92400e",
        };
      case "공실":
        return {
          background: "#fee2e2",
          color: "#b91c1c",
        };
      default:
        return {
          background: "#e5e7eb",
          color: "#374151",
        };
    }
  };

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
            <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
              입주민관리
            </h1>
            <p style={{ color: "#555", margin: 0 }}>
              동·호수별 거주 상태와 입주/이사 현황을 관리합니다.
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
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <div style={summaryCardStyle}>
            <div style={summaryLabelStyle}>총 세대</div>
            <div style={summaryValueStyle}>6</div>
          </div>

          <div style={summaryCardStyle}>
            <div style={summaryLabelStyle}>거주중</div>
            <div style={summaryValueStyle}>3</div>
          </div>

          <div style={summaryCardStyle}>
            <div style={summaryLabelStyle}>신규입주</div>
            <div style={summaryValueStyle}>1</div>
          </div>

          <div style={summaryCardStyle}>
            <div style={summaryLabelStyle}>이사예정/공실</div>
            <div style={summaryValueStyle}>2</div>
          </div>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            marginBottom: "28px",
            overflowX: "auto",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "16px" }}>세대 현황</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "900px",
            }}
          >
            <thead>
              <tr style={{ background: "#f1f5f9" }}>
                <th style={thStyle}>동</th>
                <th style={thStyle}>호수</th>
                <th style={thStyle}>세대주/입주민</th>
                <th style={thStyle}>거주상태</th>
                <th style={thStyle}>입주일</th>
                <th style={thStyle}>퇴거일</th>
                <th style={thStyle}>비고</th>
              </tr>
            </thead>
            <tbody>
              {residents.map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.building}</td>
                  <td style={tdStyle}>{item.unit}</td>
                  <td style={tdStyle}>{item.resident}</td>
                  <td style={tdStyle}>
                    <span
                      style={{
                        ...getStatusStyle(item.status),
                        padding: "6px 10px",
                        borderRadius: "999px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        display: "inline-block",
                      }}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td style={tdStyle}>{item.moveIn}</td>
                  <td style={tdStyle}>{item.moveOut}</td>
                  <td style={tdStyle}>{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "16px" }}>입주민/세대 등록</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "14px",
            }}
          >
            <input placeholder="동 (예: 101동)" style={inputStyle} />
            <input placeholder="호수 (예: 101호)" style={inputStyle} />
            <input placeholder="세대주/입주민 이름" style={inputStyle} />

            <select style={inputStyle}>
              <option>거주상태 선택</option>
              <option>거주중</option>
              <option>신규입주</option>
              <option>이사예정</option>
              <option>공실</option>
            </select>

            <input placeholder="입주일 (예: 2026-03-12)" style={inputStyle} />
            <input placeholder="퇴거일 (예: 2026-03-30)" style={inputStyle} />

            <textarea
              placeholder="비고"
              style={{
                ...inputStyle,
                minHeight: "100px",
                resize: "vertical",
                gridColumn: "1 / -1",
              }}
            />

            <button
              style={{
                gridColumn: "1 / -1",
                padding: "12px 16px",
                border: "none",
                borderRadius: "8px",
                background: "#2563eb",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              입주민 정보 저장
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

const summaryCardStyle = {
  background: "white",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

const summaryLabelStyle = {
  color: "#666",
  marginBottom: "8px",
};

const summaryValueStyle = {
  fontSize: "28px",
  fontWeight: "bold",
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

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "14px",
  width: "100%",
};