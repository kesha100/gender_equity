"use client"

import { useEffect, useState } from "react"

export default function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="text-center py-16">
      <h1 className="text-4xl font-bold text-purple-700">{title}</h1>
      <p className="text-lg text-gray-600 mt-2">{subtitle}</p>
    </section>
  )
}