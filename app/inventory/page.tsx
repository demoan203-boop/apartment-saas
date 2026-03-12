"use client";

import { useMemo, useState } from "react";

type InventoryItem = {
  id: number;
  name: string;
  category: string;
  type: string;
  price: number;
  stockIn: number;
  used: number;
  location: string;
  usage: string;
  status: string;
};

export default function InventoryPage() {
  const [items, setItems] = useState<InventoryItem[]>([
    {
      id: 1,
      name: "LED 전구 12W",
      category: "전기자재",
      type: "재고",
      price: 3500,
      stockIn: 100,
      used: 28,
      location: "관리창고 A",
      usage: "공용부 복도 조명 교체",
      status: "정상",
    },
    {
      id: 2,
      name: "수도 패킹",
      category: "배관자재",
      type: "재고",
      price: 1200,
      stockIn: 50,
      used: 18,
      location: "설비창고",
      usage: "세대 누수 보수",
      status: "정상",
    },
    {
      id: 3,
      name: "소화기 압력게이지",
      category: "소방자재",
      type: "재고",
      price: 8500,
      stockIn: 20,
      used: 6,
      location: "소방보관실",
      usage: "소방 설비 점검 교체",
      status: "정상",
    },
    {
      id: 4,
      name: "승강기 버튼 모듈",
      category: "승강기부품",
      type: "재고",
      price: 45000,
      stockIn: 10,
      used: 7,
      location: "유지보수실",
      usage: "승강기 버튼 불량 교체",
      status: "부족",
    },
    {
      id: 5,
      name: "청소용 세제",
      category: "청소용품",
      type: "재고",
      price: 9800,
      stockIn: 30,
      used: 22,
      location: "관리창고 B",
      usage: "공용부 청소",
      status: "부족",
    },
    {
      id: 6,
      name: "예초기",
      category: "조경장비",
      type: "시설자산",
      price: 280000,
      stockIn: 1,
      used: 0,
      location: "장비보관실",
      usage: "단지 조경 관리",
      status: "운용중",
    },
  ]);

  const [form, setForm] = useState({
    type: "재고",
    name: "",
    category: "",
    price: "",
    stockIn: "",
    used: "",
    location: "",
    usage: "",
    status: "정상",
    note: "",
  });

  const remainPreview =
    Math.max(Number(form.stockIn || 0) - Number(form.used || 0), 0);

  const getRemain = (item: InventoryItem) => {
    return Math.max(item.stockIn - item.used, 0);
  };

  const getAutoStatus = (item: InventoryItem) => {
    if (item.type === "시설자산") {
      return item.status || "운용중";
    }

    const remain = getRemain(item);

    if (remain === 0) return "품절";
    if (remain <= 10) return "부족";
    return "정상";
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "정상":
      case "운용중":
        return {
          background: "#dcfce7",
          color: "#166534",
        };
      case "부족":
        return {
          background: "#fef3c7",
          color: "#92400e",
        };
      case "품절":
        return {
          background: "#fee2e2",
          color: "#b91c1c",
        };
      case "수리필요":
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

  const totalAssetValue = useMemo(() => {
    return items.reduce((sum, item) => {
      return sum + item.price * getRemain(item);
    }, 0);
  }, [items]);

  const lowStockCount = useMemo(() => {
    return items.filter((item) => item.type === "재고" && getRemain(item) <= 10)
      .length;
  }, [items]);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddItem = () => {
    if (!form.name.trim()) {
      alert("품목명을 입력하세요.");
      return;
    }

    const stockInNum = Number(form.stockIn || 0);
    const usedNum = Number(form.used || 0);
    const priceNum = Number(form.price || 0);

    if (usedNum > stockInNum) {
      alert("사용수량은 입고수량보다 클 수 없습니다.");
      return;
    }

    const newItem: InventoryItem = {
      id: Date.now(),
      type: form.type,
      name: form.name,
      category: form.category,
      price: priceNum,
      stockIn: stockInNum,
      used: usedNum,
      location: form.location,
      usage: form.usage,
      status: form.status,
    };

    setItems((prev) => [newItem, ...prev]);

    setForm({
      type: "재고",
      name: "",
      category: "",
      price: "",
      stockIn: "",
      used: "",
      location: "",
      usage: "",
      status: "정상",
      note: "",
    });
  };

  const handleUsedChange = (id: number, value: string) => {
    const usedValue = Number(value || 0);

    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        const safeUsed = Math.min(Math.max(usedValue, 0), item.stockIn);

        return {
          ...item,
          used: safeUsed,
        };
      })
    );
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
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
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
              시설자산·재고관리
            </h1>
            <p style={{ color: "#555", margin: 0 }}>
              아파트 시설자산, 소모품, 유지보수 자재의 보유 현황과 사용 잔량을 관리합니다.
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
            <div style={summaryLabelStyle}>총 품목 수</div>
            <div style={summaryValueStyle}>{items.length}</div>
          </div>

          <div style={summaryCardStyle}>
            <div style={summaryLabelStyle}>부족/품절 품목</div>
            <div style={summaryValueStyle}>{lowStockCount}</div>
          </div>

          <div style={summaryCardStyle}>
            <div style={summaryLabelStyle}>시설자산/재고 총액</div>
            <div style={summaryValueStyle}>
              {totalAssetValue.toLocaleString()}원
            </div>
          </div>

          <div style={summaryCardStyle}>
            <div style={summaryLabelStyle}>관리 상태</div>
            <div style={summaryValueStyle}>운영중</div>
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
          <h2 style={{ marginTop: 0, marginBottom: "16px" }}>
            시설자산·재고 현황
          </h2>

          <p style={{ color: "#666", marginTop: 0, marginBottom: "16px" }}>
            사용수량을 수정하면 잔량이 자동으로 계산됩니다.
          </p>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "1400px",
            }}
          >
            <thead>
              <tr style={{ background: "#f1f5f9" }}>
                <th style={thStyle}>구분</th>
                <th style={thStyle}>품목명</th>
                <th style={thStyle}>분류</th>
                <th style={thStyle}>단가</th>
                <th style={thStyle}>입고수량</th>
                <th style={thStyle}>사용수량(수정 가능)</th>
                <th style={thStyle}>잔량(자동 계산)</th>
                <th style={thStyle}>보관위치</th>
                <th style={thStyle}>사용처</th>
                <th style={thStyle}>상태</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const remain = getRemain(item);
                const autoStatus = getAutoStatus(item);

                return (
                  <tr key={item.id}>
                    <td style={tdStyle}>{item.type}</td>
                    <td style={tdStyle}>{item.name}</td>
                    <td style={tdStyle}>{item.category}</td>
                    <td style={tdStyle}>{item.price.toLocaleString()}원</td>
                    <td style={tdStyle}>{item.stockIn}</td>
                    <td style={tdStyle}>
                      <input
                        type="number"
                        min={0}
                        max={item.stockIn}
                        value={item.used}
                        onChange={(e) => handleUsedChange(item.id, e.target.value)}
                        style={smallInputStyle}
                      />
                    </td>
                    <td style={tdStyle}>
                      <strong>{remain}</strong>
                    </td>
                    <td style={tdStyle}>{item.location}</td>
                    <td style={tdStyle}>{item.usage}</td>
                    <td style={tdStyle}>
                      <span
                        style={{
                          ...getStatusStyle(autoStatus),
                          padding: "6px 10px",
                          borderRadius: "999px",
                          fontSize: "14px",
                          fontWeight: "bold",
                          display: "inline-block",
                        }}
                      >
                        {autoStatus}
                      </span>
                    </td>
                  </tr>
                );
              })}
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
          <h2 style={{ marginTop: 0, marginBottom: "16px" }}>
            시설자산·재고 등록
          </h2>

          <p style={{ color: "#666", marginTop: 0 }}>
            입고수량과 사용수량을 입력하면 아래 잔량이 자동으로 계산됩니다.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "14px",
            }}
          >
            <select name="type" value={form.type} onChange={handleFormChange} style={inputStyle}>
              <option value="재고">재고</option>
              <option value="시설자산">시설자산</option>
            </select>

            <input
              name="name"
              value={form.name}
              onChange={handleFormChange}
              placeholder="품목명"
              style={inputStyle}
            />

            <input
              name="category"
              value={form.category}
              onChange={handleFormChange}
              placeholder="분류 (예: 전기자재, 소방자재)"
              style={inputStyle}
            />

            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleFormChange}
              placeholder="단가"
              style={inputStyle}
            />

            <input
              name="stockIn"
              type="number"
              value={form.stockIn}
              onChange={handleFormChange}
              placeholder="입고수량"
              style={inputStyle}
            />

            <input
              name="used"
              type="number"
              value={form.used}
              onChange={handleFormChange}
              placeholder="사용수량"
              style={inputStyle}
            />

            <input
              value={remainPreview}
              readOnly
              placeholder="잔량"
              style={{
                ...inputStyle,
                background: "#f8fafc",
                fontWeight: "bold",
              }}
            />

            <input
              name="location"
              value={form.location}
              onChange={handleFormChange}
              placeholder="보관위치"
              style={inputStyle}
            />

            <input
              name="usage"
              value={form.usage}
              onChange={handleFormChange}
              placeholder="사용처"
              style={inputStyle}
            />

            <select
              name="status"
              value={form.status}
              onChange={handleFormChange}
              style={inputStyle}
            >
              <option value="정상">정상</option>
              <option value="부족">부족</option>
              <option value="운용중">운용중</option>
              <option value="수리필요">수리필요</option>
            </select>

            <textarea
              name="note"
              value={form.note}
              onChange={handleFormChange}
              placeholder="비고"
              style={{
                ...inputStyle,
                minHeight: "100px",
                resize: "vertical",
                gridColumn: "1 / -1",
              }}
            />

            <button
              onClick={handleAddItem}
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
              시설자산·재고 정보 저장
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

const smallInputStyle = {
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "14px",
  width: "90px",
};