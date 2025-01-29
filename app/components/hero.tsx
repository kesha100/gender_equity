"use client"

import { useEffect, useState } from "react"

export default function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative h-96 bg-gradient-to-r from-purple-700 to-pink-500 overflow-hidden">
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center text-white z-10 transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="text-5xl font-bold mb-4 text-center">{title}</h1>
        <p className="text-xl max-w-2xl text-center">{subtitle}</p>
      </div>
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF0066"
            d="M47.7,-57.2C59.5,-47.3,65.5,-30.9,67.2,-14.6C68.9,1.8,66.3,18.1,58.5,31.3C50.7,44.5,37.7,54.7,22.8,60.8C7.9,66.8,-9,68.7,-24.9,64.4C-40.8,60.1,-55.7,49.6,-62.8,35.4C-69.9,21.2,-69.2,3.3,-65.2,-13.2C-61.2,-29.7,-53.8,-44.7,-42.1,-54.6C-30.4,-64.5,-15.2,-69.2,1,-70.3C17.2,-71.4,34.5,-67,47.7,-57.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  )
}

