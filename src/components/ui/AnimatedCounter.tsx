// Display real programme counts immediately, including during SSR and reduced-motion usage.
interface AnimatedCounterProps { target: number; suffix?: string; duration?: number }
export default function AnimatedCounter({target, suffix = ''}: AnimatedCounterProps) {
  return <span className="font-heading text-5xl text-antique-gold tabular-nums">{target}{suffix}</span>
}
