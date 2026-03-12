export default function MaintenancePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          유지보수
        </h1>

        <p style={{ color: "#555", marginBottom: "30px" }}>
          시설 수리 및 교체 이력을 관리하는 페이지입니다.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "16px" }}>유지보수 내역</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ background: "#f1f5f9" }}>
                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "left" }}>날짜</th>
                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "left" }}>구분</th>
                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "left" }}>대상 설비</th>
                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "left" }}>내용</th>
                <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "left" }}>처리상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>2026-03-12</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>교체</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>승강기 버튼 패널</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>1층 버튼 인식 불량으로 교체</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>완료</td>
              </tr>
              <tr>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>2026-03-10</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>수리</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>지하주차장 조명</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>점등 불량 배선 수리</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>완료</td>
              </tr>
              <tr>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>2026-03-08</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>보수</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>소방 배관</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>누수 부위 보수 작업</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>진행중</td>
              </tr>
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
          <h2 style={{ marginTop: 0, marginBottom: "16px" }}>유지보수 등록</h2>

          <div style={{ display: "grid", gap: "12px" }}>
            <input
              placeholder="날짜 (예: 2026-03-12)"
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />

            <select
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <option>구분 선택</option>
              <option>수리</option>
              <option>교체</option>
              <option>보수</option>
              <option>확인 후 견적중</option>
              <option>점검 후 조치</option>
            </select>

            <input
              placeholder="대상 설비"
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />

            <textarea
              placeholder="수리 또는 교체 내용을 입력하세요"
              rows={4}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                resize: "vertical",
              }}
            />

            <select
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <option>처리상태 선택</option>
              <option>접수</option>
              <option>진행중</option>
              <option>보류상태</option>
              <option>정지상태</option>
              <option>완료</option>
            </select>

            <button
              style={{
                padding: "12px 16px",
                border: "none",
                borderRadius: "8px",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              유지보수 내역 저장
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}