"use client";

import { useEffect, useState } from "react";

type Resident = {
  building: string;
  unit: string;
  resident: string;
  status: string;
  moveIn: string;
  moveOut: string;
  note: string;
};

export default function ResidentsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const residents: Resident[] = [
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
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "거주중":
        return { background: "#dcfce7", color: "#166534" };
      case "신규입주":
        return { background: "#dbeafe", color: "#1d4ed8" };
      case "이사예정":
        return { background: "#fef3c7", color: "#92400e" };
      case "공실":
        return { background: "#fee2e2", color: "#b91c1c" };
      default:
        return { background: "#e5e7eb", color: "#374151" };
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: isMobile ? "20px" : "40px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            flexDirection: isMobile ? "column" : "row",
            marginBottom: "20px",
            gap: "12px",
          }}
        >
          <div>
            <h1 style={{ fontSize: isMobile ? "26px" : "32px", marginBottom: "10px" }}>
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

        {!isMobile && (
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
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
        )}

        {isMobile && (
          <div style={{ display: "grid", gap: "14px" }}>
            {residents.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "16px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
                  {item.building} {item.unit}
                </div>

                <div style={mobileLineStyle}>세대주/입주민: {item.resident}</div>
                <div style={mobileLineStyle}>
                  거주상태:{" "}
                  <span
                    style={{
                      ...getStatusStyle(item.status),
                      padding: "4px 8px",
                      borderRadius: "999px",
                      fontSize: "13px",
                      fontWeight: "bold",
                      display: "inline-block",
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <div style={mobileLineStyle}>입주일: {item.moveIn}</div>
                <div style={mobileLineStyle}>퇴거일: {item.moveOut}</div>
                <div style={mobileLineStyle}>비고: {item.note}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

const thStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "left" as const,
};

const tdStyle = {
  border: "1px solid #ddd",
  padding: "12px",
};

const mobileLineStyle = {
  marginTop: "8px",
  color: "#444",
  lineHeight: 1.5,
};