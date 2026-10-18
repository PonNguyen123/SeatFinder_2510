import { chairs, tables } from "@/data/floor"

const FULL = { x: 160, y: 280, w: 1760, h: 1640 }

const CANOPY =
  "M 211 530 C 250 430 340 372 430 376 C 540 382 640 430 760 456 C 900 478 1040 448 1180 404 C 1320 358 1480 324 1600 328 C 1700 332 1780 390 1836 500"
const CANOPY_INNER =
  "M 211 518 C 250 418 340 360 430 364 C 540 370 640 418 760 444 C 900 466 1040 436 1180 392 C 1320 346 1480 312 1600 316 C 1700 320 1780 378 1836 488"

type FloorPlanProps = {
  activeTable: number | null
  focus: boolean
  onToggleFocus?: () => void
}

function focusView(cx: number, cy: number) {
  const w = 640
  const h = 760
  const x = Math.max(FULL.x, Math.min(cx - w / 2, FULL.x + FULL.w - w))
  const y = Math.max(FULL.y, Math.min(cy - h / 2 - 40, FULL.y + FULL.h - h))
  return { x, y, w, h }
}

export function FloorPlan({ activeTable, focus, onToggleFocus }: FloorPlanProps) {
  const active = tables.find((table) => table.id === activeTable) ?? null
  const view = active && focus ? focusView(active.x, active.y) : FULL
  const dim = activeTable !== null
  const pinX = active ? ((active.x - view.x) / view.w) * 100 : 0
  const pinY = active ? ((active.y - view.y) / view.h) * 100 : 0
  const pinAbove = pinY > 22

  return (
    <div className="relative h-full min-h-0 w-full">
      <svg
        viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}
        className="h-full w-full"
        role="img"
        aria-label={
          active
            ? `Sơ đồ sảnh, bàn ${active.id} được đánh dấu`
            : "Sơ đồ sảnh tiệc, 32 bàn"
        }
      >
        <path d={`${CANOPY} L 1836 930 L 1867 930 L 1867 1552 L 211 1552 Z`} className="fill-none stroke-cream" strokeWidth={2.4} strokeLinejoin="round" />
        <path d={CANOPY_INNER} className="fill-none stroke-cream opacity-55" strokeWidth={1.3} strokeLinejoin="round" />

        <rect x={430} y={520} width={290} height={64} className="fill-cream" />
        <rect x={822} y={520} width={412} height={64} className="fill-cream" />
        <rect x={1336} y={520} width={290} height={64} className="fill-cream" />

        <rect x={822} y={592} width={412} height={233} className="fill-cream" />
        <text
          x={1028}
          y={716}
          textAnchor="middle"
          className="fill-wine font-display"
          style={{ fontSize: 34, letterSpacing: "0.28em" }}
        >
          SÂN KHẤU
        </text>
        <rect x={990} y={825} width={72} height={473} className="fill-cream" />

        <rect x={386} y={1552} width={369} height={116} className="fill-none stroke-cream" strokeWidth={2.2} />
        <rect x={755} y={1552} width={301} height={116} className="fill-none stroke-cream" strokeWidth={2.2} />
        <rect x={1360} y={1552} width={507} height={152} className="fill-none stroke-cream" strokeWidth={2.2} />
        <text
          x={1614}
          y={1636}
          textAnchor="middle"
          className="fill-cream font-sans"
          style={{ fontSize: 20, letterSpacing: "0.28em" }}
        >
          STAFF ONLY
        </text>

        {active && (
          <path
            d={`M 1204 1508 C 1204 ${(1508 + active.y) / 2}, ${active.x} ${(1508 + active.y) / 2}, ${active.x} ${active.y + 70}`}
            className="route-line fill-none stroke-cream"
            strokeWidth={6}
            strokeLinecap="round"
          />
        )}
        <path d="M1128 1552 A 58 58 0 0 1 1244 1552" className="fill-none stroke-cream" strokeWidth={2.2} />
        <path d="M1244 1552 A 58 58 0 0 1 1360 1552" className="fill-none stroke-cream" strokeWidth={2.2} />
        <path d="M1648 1552 A 52 52 0 0 1 1752 1552" className="fill-none stroke-cream" strokeWidth={2.2} />
        <path d="M1752 1552 A 52 52 0 0 1 1856 1552" className="fill-none stroke-cream" strokeWidth={2.2} />
        <text x={1204} y={1610} textAnchor="middle" className="fill-cream font-sans" style={{ fontSize: 16, letterSpacing: "0.32em" }}>
          LỐI VÀO
        </text>

        {tables.map((table) => {
          const on = table.id === activeTable
          const seats = chairs.filter((chair) => chair.t === table.id)
          return (
            <g key={table.id} opacity={!dim || on ? 1 : 0.22}>
              {seats.map((seat) => (
                <rect
                  key={`${seat.x}-${seat.y}`}
                  x={seat.x}
                  y={seat.y}
                  width={seat.w}
                  height={seat.h}
                  rx={4}
                  className={on ? "fill-paper stroke-sky" : "fill-sky"}
                  strokeWidth={on ? 3 : 0}
                />
              ))}
              {on && (
                <g className="seat-beacon">
                  <circle cx={table.x} cy={table.y} r={118} className="fill-sky/35" />
                  <circle cx={table.x} cy={table.y} r={96} className="seat-ring fill-none stroke-cream" strokeWidth={8} />
                  <circle cx={table.x} cy={table.y} r={78} className="seat-ring fill-none stroke-sky" strokeWidth={4} />
                </g>
              )}
              <circle cx={table.x} cy={table.y} r={on ? 40 : 34} className={on ? "fill-cream" : "fill-paper"} />
              <text
                x={table.x}
                y={table.y + 2}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-wine font-display"
                style={{ fontSize: on ? 36 : 30, fontWeight: 600 }}
              >
                {table.id}
              </text>
            </g>
          )
        })}
      </svg>
      {active && (
        <div
          className="seat-beacon pointer-events-none absolute z-10"
          style={{
            left: `${pinX}%`,
            top: `${pinY}%`,
            transform: pinAbove ? "translate(-50%, calc(-100% - 4.8rem))" : "translate(-50%, 3rem)",
          }}
        >
          <div className="rounded-2xl bg-cream px-3 py-1.5 text-center text-wine">
            <p className="font-script text-xl leading-none">Bàn của bạn</p>
            <p className="font-mark text-4xl leading-none">{active.id}</p>
          </div>
        </div>
      )}
      {onToggleFocus && active && (
        <button
          type="button"
          onClick={onToggleFocus}
          className="absolute right-3 bottom-3 rounded-full bg-cream px-4 py-2 text-sm font-medium text-wine"
        >
          {focus ? "Xem toàn sảnh" : "Phóng bàn của bạn"}
        </button>
      )}
    </div>
  )
}
