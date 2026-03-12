export default function AdminSchedulePage() {
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const scheduleData = [
    { day: 1, staff: "김관리", shift: "주간", note: "관리사무소" },
    { day: 2, staff: "이점검", shift: "주간", note: "시설점검" },
    { day: 3, staff: "박민원", shift: "주간", note: "민원창구" },
    { day: 4, staff: "최야간", shift: "야간", note: "정문 경비" },
    { day: 5, staff: "김관리", shift: "주간", note: "회의" },
    { day: 6, staff: "이점검", shift: "휴무", note: "-" },
    { day: 7, staff: "박민원", shift: "주간", note: "입주 안내" },
    { day: 8, staff: "최야간", shift: "야간", note: "순찰" },
    { day: 9, staff: "김관리", shift: "주간", note: "관리업무" },
    { day: 10, staff: "이점검", shift: "주간", note: "기계실 점검" },
    { day: 11, staff: "박민원", shift: "휴무", note: "-" },
    { day: 12, staff: "최야간", shift: "야간", note: "출입 통제" },
  ];

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
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: "32px" }}>근무 스케줄 관리</h1>
            <p style={{ color: "#555", marginTop: "8px" }}>
              직원 근무, 휴무, 야간근무 일정을 달력 형태로 관리합니다.
            </p>
          </div>

          <a
            href="/admin/dashboard"
            style={{
              padding: "10px 16px",
              background: "#2563eb",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            관리자 대시보드
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
          <h2 style={{ marginTop: 0, marginBottom: "16px" }}>월간 스케줄</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "10px",
            }}
          >
            {days.map((day) => (
              <div
                key={day}
                style={{
                  background: "#e2e8f0",
                  padding: "12px",
                  borderRadius: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {day}
              </div>
            ))}

            {Array.from({ length: 31 }, (_, index) => {
              const dayNumber = index + 1;
              const daySchedule = scheduleData.filter((item) => item.day === dayNumber);

              return (
                <div
                  key={dayNumber}
                  style={{
                    minHeight: "130px",
                    background: "#f8fafc",
                    border: "1px solid #e5e7eb",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
                    {dayNumber}일
                  </div>

                  {daySchedule.length === 0 ? (
                    <div style={{ fontSize: "13px", color: "#999" }}>일정 없음</div>
                  ) : (
                    daySchedule.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "white",
                          padding: "8px",
                          borderRadius: "8px",
                          fontSize: "13px",
                          marginBottom: "6px",
                          border: "1px solid #ddd",
                        }}
                      >
                        <div style={{ fontWeight: "bold" }}>{item.staff}</div>
                        <div>{item.shift}</div>
                        <div style={{ color: "#666" }}>{item.note}</div>
                      </div>
                    ))
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "16px" }}>스케줄 등록</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
            }}
          >
            <input placeholder="직원명" style={inputStyle} />
            <input placeholder="날짜 (예: 15일)" style={inputStyle} />

            <select style={inputStyle}>
              <option>근무형태 선택</option>
              <option>주간</option>
              <option>야간</option>
              <option>휴무</option>
              <option>당직</option>
            </select>

            <input placeholder="배치/업무 내용" style={inputStyle} />

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
              스케줄 저장
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "14px",
  width: "100%",
};