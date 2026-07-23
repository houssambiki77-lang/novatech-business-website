export default function useRipple() {
  const createRipple = (event) => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const span = document.createElement('span')
    span.className = 'ripple-el'
    span.style.width = span.style.height = `${size}px`
    span.style.left = `${event.clientX - rect.left - size / 2}px`
    span.style.top = `${event.clientY - rect.top - size / 2}px`
    button.appendChild(span)
    setTimeout(() => span.remove(), 600)
  }
  return createRipple
}
