'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    // Add reveal class to elements that get it dynamically
    document.querySelectorAll('.step, .audience-card, .trust-item').forEach((el) =>
      el.classList.add('reveal')
    )

    // Observe all reveal elements, including statically-tagged ones like .laptop-wrap
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
