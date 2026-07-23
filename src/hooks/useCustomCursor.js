import { useEffect, useRef } from 'react'

export default function useCustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px) and (hover: hover)').matches
    if (!isDesktop) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      requestAnimationFrame(animateRing)
    }

    const onEnterInteractive = () => {
      ring.style.width = '54px'
      ring.style.height = '54px'
      ring.style.borderColor = 'rgba(37, 99, 235, 0.9)'
    }
    const onLeaveInteractive = () => {
      ring.style.width = '34px'
      ring.style.height = '34px'
      ring.style.borderColor = 'rgba(147, 51, 234, 0.7)'
    }

    window.addEventListener('mousemove', move)
    const frame = requestAnimationFrame(animateRing)

    const interactiveEls = document.querySelectorAll('a, button, input, textarea, [data-cursor-hover]')
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(frame)
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
    }
  }, [])

  return { dotRef, ringRef }
}
