export default function TextHome({ variant = "body", className, children }) {
  const base = "text-foreground leading-relaxed"
  const size = variant === "hero" ? "text-base md:text-lg" : "text-sm md:text-base"

  return (
    <p className={`${base} ${size} ${className}`}>
      {children}
    </p>
  )
}
