export default function ComplaintsPage() {
  const complaints = [
    {
      id: 1,
      title: "101동 엘리베이터 소음",
      location: "101동",
      status: "접수",
      date: "2026-03-11",
      manager: "김관리",
    },
    {
      id: 2,
      title: "주차장 조명 고장",
      location: "지하주차장",
      status: "처리중",
      date: "2026-03-10",
      manager: "이시설",
    },
    {
      id: 3,
      title: "분리수거장 청소 요청",
      location: "후문 분리수거장",
      status: "완료",
      date: "2026-03-09",
      manager: "박미화",
    },
  ]

  const getStatusStyle = (status: string) => {
    if (status === "접수") {
      return "bg-red-100 text-red-600"
    }
    if (status === "처리중") {
      return "bg-yellow-100 text-yellow-700"
    }
    return "bg-green-100 text-green-700"
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* 사이드바 */}
        <aside className="w-64 min-h-screen bg-white border-r p-6">
          <h1 className="text-2xl font-bold mb-8">관리사무소 앱</h1>

          <nav className="space-y-4 text-gray-700">
            <a href="/dashboard" className="block hover:text-blue-600">
              대시보드
            </a>
            <a href="/complaints" className="block font-semibold text-blue-600">
              민원 관리
            </a>
            <div>시설 점검</div>
            <div>공지사항</div>
            <div>설문조사</div>
          </nav>
        </aside>

        {/* 메인 */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">민원 관리</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              + 민원 등록
            </button>
          </div>

          {/* 요약 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl shadow p-5">
              <div className="text-sm text-gray-500">전체 민원</div>
              <div className="text-2xl font-bold mt-2">3건</div>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <div className="text-sm text-gray-500">처리 대기</div>
              <div className="text-2xl font-bold mt-2">1건</div>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <div className="text-sm text-gray-500">처리 완료</div>
              <div className="text-2xl font-bold mt-2">1건</div>
            </div>
          </div>

          {/* 민원 목록 */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="grid grid-cols-6 gap-4 px-6 py-4 border-b bg-gray-50 font-semibold text-gray-700">
              <div>번호</div>
              <div className="col-span-2">제목</div>
              <div>위치</div>
              <div>담당자</div>
              <div>상태</div>
            </div>

            {complaints.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-6 gap-4 px-6 py-4 border-b items-center text-gray-700"
              >
                <div>{item.id}</div>
                <div className="col-span-2">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.date}</div>
                </div>
                <div>{item.location}</div>
                <div>{item.manager}</div>
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}