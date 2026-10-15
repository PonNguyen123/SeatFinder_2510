import { useMemo } from "react"
import { create } from "qrcode"

type DotQrProps = {
  value: string
  className?: string
}

function inFinder(x: number, y: number, size: number) {
  const boxes = [
    [0, 0],
    [size - 7, 0],
    [0, size - 7],
  ]
  return boxes.some(([ox, oy]) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7)
}

export function DotQr({ value, className }: DotQrProps) {
  const model = useMemo(() => {
    const qr = create(value, { errorCorrectionLevel: "H" })
    return { size: qr.modules.size, data: qr.modules.data }
  }, [value])

  const quiet = 2
  const total = model.size + quiet * 2
  const finders = [0, model.size - 7, 0].map((_, index) => {
    const origins = [
      [0, 0],
      [model.size - 7, 0],
      [0, model.size - 7],
    ]
    return origins[index]
  })

  const dots: Array<{ cx: number; cy: number }> = []
  for (let y = 0; y < model.size; y++) {
    for (let x = 0; x < model.size; x++) {
      if (!model.data[y * model.size + x]) continue
      if (inFinder(x, y, model.size)) continue
      dots.push({ cx: x + quiet + 0.5, cy: y + quiet + 0.5 })
    }
  }

  return (
    <svg
      viewBox={`0 0 ${total} ${total}`}
      className={className}
      role="img"
      aria-label="Mã QR dẫn tới trang tìm chỗ ngồi"
    >
      <rect width={total} height={total} rx={1.4} className="fill-cream" />
      {finders.map(([x, y]) => (
        <g key={`${x}-${y}`} transform={`translate(${x + quiet} ${y + quiet})`}>
          <rect width={7} height={7} rx={1.4} className="fill-wine" />
          <rect x={1} y={1} width={5} height={5} rx={0.8} className="fill-cream" />
          <rect x={2} y={2} width={3} height={3} rx={0.6} className="fill-navy" />
        </g>
      ))}
      {dots.map((dot) => (
        <circle key={`${dot.cx}-${dot.cy}`} cx={dot.cx} cy={dot.cy} r={0.36} className="fill-navy" />
      ))}
    </svg>
  )
}
