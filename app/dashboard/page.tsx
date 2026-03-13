"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const menuItems = [
    { label: "대시보드", href: "/dashboard" },
    { label: "시설점검", href: "/inspection" },
    { label: "유지보수", href: "/maintenance" },
    { label: "민원관리", href: "/complaints" },
    { label: "입주민관리", href: "/residents" },
    { label: "시설자산·재고관리", href: "/inventory" },
    { label: "공지사항", href: "/notice" },
    { label: "관리자 페이지", href: "/admin" },
  ];

  const quickLinks = [
    { label: "시설점검", href: "/inspection" },
    { label: "유지보수", href: "/maintenance" },
    { label: "민원관리", href: "/complaints" },
    { label: "입주민관리", href: "/residents" },
    { label: "시설자산·재고관리", href: "/inventory" },
    { label: "공지사항", href: "/notice" },
  ];

  const noticeItems = [
    {
      title: "3월 정기 소독 일정 안내",
      date: "2026-03-12",
      content: "단지 전체 정기 소독이 3월 15일 오전 10시부터 진행됩니다.",
    },
    {
      title: "지하주차장 조명 교체 작업 공지",
      date: "2026-03-11",
      content: "지하주차장 B구역 조명 교체 작업이 금일 오후 2시부터 진행됩니다.",
    },
    {
      title: "승강기 정기 점검 안내",
      date: "2026-03-09",
      content: "101동, 102동 승강기 정기 점검이 순차적으로 실시됩니다.",
    },
  ];

  const summaryCards = [
    { title: "오늘 점검", value: "4건" },
    { title: "미처리 민원", value: "2건" },
    { title: "유지보수 진행", value: "3건" },
    { title: "신규입주", value: "1세대" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "#f1f5f9",
        fontFamily: "sans-serif",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      {isMobile && (
        <div
          style={{
            background: "#1e293b",
            color: "white",
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 20,
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>관리시스템</div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              border: "none",
              background: "#334155",
              color: "white",
              padding: "10px 14px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {menuOpen ? "닫기" : "메뉴"}
          </button>
        </div>
      )}

      {(!isMobile || menuOpen) && (
        <aside
          style={{
            width: isMobile ? "100%" : "240px",
            background: "#1e293b",
            color: "white",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          {!isMobile && (
            <h2 style={{ marginTop: 0, marginBottom: "30px" }}>관리시스템</h2>
          )}

          <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.04)",
                  display: "block",
                  fontWeight: 500,
                }}
                onClick={() => {
                  if (isMobile) setMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
      )}

      <section
        style={{
          flex: 1,
          padding: isMobile ? "20px" : "40px",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "26px" : "32px",
            marginTop: 0,
            marginBottom: "10px",
          }}
        >
          관리사무소 대시보드
        </h1>

        <p
          style={{
            color: "#555",
            marginBottom: "24px",
            fontSize: isMobile ? "15px" : "16px",
          }}
        >
          주요 업무 현황을 확인하세요.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr 1fr"
              : "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {summaryCards.map((card) => (
            <div key={card.title} style={cardStyle}>
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "10px",
                  fontSize: isMobile ? "16px" : "18px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: isMobile ? "20px" : "24px",
                  fontWeight: "bold",
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                {card.value}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            ...cardStyle,
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "16px", fontSize: isMobile ? "20px" : "24px" }}>
            빠른 이동
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "12px",
            }}
          >
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} style={quickLinkStyle}>
                {link.label}
              </a>
            ))}
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
              alignItems: isMobile ? "flex-start" : "center",
              flexDirection: isMobile ? "column" : "row",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <h2 style={{ margin: 0, fontSize: isMobile ? "20px" : "24px" }}>
              최근 공지사항
            </h2>

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
            {noticeItems.map((notice, index) => (
              <div key={index} style={noticeItemStyle}>
                <div
                  style={{
                    fontWeight: "bold",
                    marginBottom: "6px",
                    fontSize: isMobile ? "16px" : "18px",
                  }}
                >
                  {notice.title}
                </div>
                <div
                  style={{
                    color: "#666",
                    fontSize: "14px",
                    marginBottom: "6px",
                  }}
                >
                  {notice.date}
                </div>
                <div
                  style={{
                    color: "#444",
                    lineHeight: 1.6,
                    fontSize: isMobile ? "15px" : "16px",
                  }}
                >
                  {notice.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
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

const noticeItemStyle = {
  padding: "16px",
  border: "1px solid #e5e7eb",
  borderRadius: "10px",
  background: "#f8fafc",
};