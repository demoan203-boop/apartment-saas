"use client";

import { useEffect, useState } from "react";

type Complaint = {
  id: number;
  title: string;
  resident: string;
  building: string;
  unit: string;
  category: string;
  status: string;
  date: string;
  content: string;
};

export default function ComplaintsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const complaints: Complaint[] = [
    {
      id: 1,
      title: "지하주차장 조명 불량",
      resident: "김민수",
      building: "101동",
      unit: "101호",
      category: "시설",
      status: "접수",
      date: "2026-03-12",
      content: "지하주차장 B구역 조명이 켜지지 않습니다.",
    },
    {
      id: 2,
      title: "승강기 소음 발생",
      resident: "이서연",
      building: "101동",
      unit: "102호",
      category: "승강기",
      status: "처리중",
      date: "2026-03-11",
      content: "승강기 운행 시 소음이 발생합니다.",
    },
    {
      id: 3,
      title: "복도 누수 확인 요청",
      resident: "박지훈",
      building: "102동",
      unit: "201호",
      category: "배관",
      status: "완료",
      date: "2026-03-10",
      content: "복도 천장에서 물방울이 떨어집니다.",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "접수":
        return { background: "#dbeafe", color: "#1d4ed8" };
      case "처리중":
        return { background: "#fef3c7", color: "#92400e" };
      case "완료":
        return { background: "#dcfce7", color: "#166534" };
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
              민원관리
            </h1>
            <p style={{ color: "#555", margin: 0 }}>
              입주민 민원 접수 및 처리 현황을 관리합니다.
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
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div style={summaryCardStyle}>
            <div style={summaryLabelStyle}>총 민원</div>
            <div style={summaryValueStyle}>{complaints.length}건</div>
          </div>
          <div style={summaryCardStyle}>
            <div style={summaryLabelStyle}>접수</div>
            <div style={summaryValueStyle}>
              {complaints.filter((item) => item.status === "접수").length}건
            </div>
          </div>
          <div style={summaryCardStyle}>
            <div style={summaryLabelStyle}>처리중</div>
            <div style={summaryValueStyle}>
              {complaints.filter((item) => item.status === "처리중").length}건
            </div>
          </div>
          <div style={summaryCardStyle}>
            <div style={summaryLabelStyle}>완료</div>
            <div style={summaryValueStyle}>
              {complaints.filter((item) => item.status === "완료").length}건
            </div>
          </div>
        </div>

        {!isMobile && (
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              marginBottom: "24px",
              overflowX: "auto",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "16px" }}>민원 목록</h2>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "1000px",
              }}
            >
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={thStyle}>번호</th>
                  <th style={thStyle}>제목</th>
                  <th style={thStyle}>신청인</th>
                  <th style={thStyle}>동</th>
                  <th style={thStyle}>호수</th>
                  <th style={thStyle}>분류</th>
                  <th style={thStyle}>상태</th>
                  <th style={thStyle}>접수일</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((item) => (
                  <tr key={item.id}>
                    <td style={tdStyle}>{item.id}</td>
                    <td style={tdStyle}>{item.title}</td>
                    <td style={tdStyle}>{item.resident}</td>
                    <td style={tdStyle}>{item.building}</td>
                    <td style={tdStyle}>{item.unit}</td>
                    <td style={tdStyle}>{item.category}</td>
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
                    <td style={tdStyle}>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {isMobile && (
          <div style={{ display: "grid", gap: "14px", marginBottom: "24px" }}>
            {complaints.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "16px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
                  {item.title}
                </div>

                <div style={mobileLineStyle}>신청인: {item.resident}</div>
                <div style={mobileLineStyle}>
                  위치: {item.building} {item.unit}
                </div>
                <div style={mobileLineStyle}>분류: {item.category}</div>
                <div style={mobileLineStyle}>
                  상태:{" "}
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
                <div style={mobileLineStyle}>접수일: {item.date}</div>
                <div style={{ ...mobileLineStyle, marginTop: "10px" }}>
                  내용: {item.content}
                </div>
              </div>
            ))}
          </div>
        )}

        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "16px" }}>민원 등록</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "12px",
            }}
          >
            <input placeholder="민원 제목" style={inputStyle} />
            <input placeholder="신청인 이름" style={inputStyle} />
            <input placeholder="동 (예: 101동)" style={inputStyle} />
            <input placeholder="호수 (예: 101호)" style={inputStyle} />

            <select style={inputStyle}>
              <option>분류 선택</option>
              <option>시설</option>
              <option>승강기</option>
              <option>배관</option>
              <option>주차</option>
              <option>소음</option>
              <option>기타</option>
            </select>

            <select style={inputStyle}>
              <option>상태 선택</option>
              <option>접수</option>
              <option>처리중</option>
              <option>완료</option>
            </select>

            <textarea
              placeholder="민원 내용을 입력하세요"
              style={{
                ...inputStyle,
                minHeight: "120px",
                resize: "vertical",
                gridColumn: isMobile ? "auto" : "1 / -1",
              }}
            />

            <button
              style={{
                gridColumn: isMobile ? "auto" : "1 / -1",
                padding: "12px 16px",
                border: "none",
                borderRadius: "8px",
                background: "#2563eb",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              민원 저장
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
  fontSize: "22px",
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

const mobileLineStyle = {
  marginTop: "8px",
  color: "#444",
  lineHeight: 1.5,
};