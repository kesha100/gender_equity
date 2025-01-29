"use client"

import type React from "react"
import { useState, useEffect } from "react"

export default function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-purple-700 mb-4">{title}</h2>
      {children}
    </section>
  )
}

