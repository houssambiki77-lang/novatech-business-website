import useRipple from '../../hooks/useRipple'

export default function RippleButton({ as: Component = 'button', className = '', children, ...props }) {
  const createRipple = useRipple()

  return (
    <Component
      className={`ripple ${className}`}
      onMouseDown={createRipple}
      {...props}
    >
      {children}
    </Component>
  )
}
