function Corner({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" aria-hidden>
      <path d="M2 34 V2 H34" className="fill-none stroke-cream" strokeWidth="1.6" />
      <path d="M6 34 V6 H34" className="fill-none stroke-cream" strokeWidth="0.9" />
      <path d="M2 2 H9 V9 H2 Z" className="fill-none stroke-cream" strokeWidth="1.1" />
      <path d="M9 5 H15 V12 H5 V9" className="fill-none stroke-cream" strokeWidth="1.1" />
    </svg>
  )
}

export function OrnamentFrame() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 text-cream" aria-hidden>
      <div className="frame-orbit absolute inset-1.5" />
      <div className="meander-x absolute top-1.5 right-8 left-8 h-2" />
      <div className="meander-x absolute right-8 bottom-1.5 left-8 h-2" />
      <div className="meander-y absolute top-8 bottom-8 left-1.5 w-2" />
      <div className="meander-y absolute top-8 right-1.5 bottom-8 w-2 -scale-x-100" />
      <Corner className="corner-glow absolute top-0 left-0 size-7" />
      <Corner className="corner-glow absolute top-0 right-0 size-7 -scale-x-100" />
      <Corner className="corner-glow absolute bottom-0 left-0 size-7 -scale-y-100" />
      <Corner className="corner-glow absolute right-0 bottom-0 size-7 -scale-100" />
    </div>
  )
}
