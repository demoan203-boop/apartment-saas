"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {

  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {

    if(email && password){
      router.push("/dashboard")
    }else{
      alert("이메일과 비밀번호를 입력하세요")
    }

  }

  return (
    <div className="flex items-center justify-center min-h-screen">

      <div className="border p-8 rounded w-80">

        <h2 className="text-xl mb-4">로그인</h2>

        <input
          className="border w-full mb-3 p-2"
          placeholder="이메일"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border w-full mb-4 p-2"
          placeholder="비밀번호"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white w-full p-2"
          onClick={handleLogin}
        >
          로그인
        </button>

      </div>

    </div>
  )
}