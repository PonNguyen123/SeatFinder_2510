import { useEffect, useMemo, useState } from "react"
import { ArrowLeft, QrCode, Search, X } from "lucide-react"
import { eventCopy, guests, type Guest } from "@/data/guests"
import { searchGuests } from "@/lib/match"
import { DotQr } from "@/components/dot-qr"
import { FloorPlan } from "@/components/floor-plan"
import { OrnamentFrame } from "@/components/ornament-frame"

type Screen = "find" | "seat" | "qr"

export function SeatingApp() {
  const [screen, setScreen] = useState<Screen>("find")
  const [query, setQuery] = useState("")
  const [guest, setGuest] = useState<Guest | null>(null)
  const [focus, setFocus] = useState(true)
  const [inviteUrl, setInviteUrl] = useState("")

  useEffect(() => {
    const url = new URL(window.location.href)
    url.search = ""
    url.hash = ""
    setInviteUrl(url.toString())
  }, [])

  const results = useMemo(() => searchGuests(guests, query), [query])
  const mates = guest ? guests.filter((item) => item.table === guest.table && item.id !== guest.id) : []

  function pick(next: Guest) {
    setGuest(next)
    setFocus(true)
    setScreen("seat")
  }

  if (screen === "qr") {
    return (
      <main className="min-h-screen px-4 py-8 text-cream">
        <OrnamentFrame />
        <div className="mx-auto flex min-h-screen max-w-lg flex-col px-6 py-8">
          <button type="button" onClick={() => setScreen("find")} className="inline-flex items-center gap-2 text-sm text-cream">
            <ArrowLeft className="size-4" aria-hidden />
            Quay lại
          </button>
          <p className="mt-10 font-mark text-sm tracking-widest uppercase text-cream">{eventCopy.kicker}</p>
          <h1 className="mt-3 font-display text-5xl leading-none text-cream">Mã mời</h1>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-cream/90">
            In hoặc chiếu mã này. Khách quét bằng điện thoại sẽ mở trang tìm chỗ ngồi.
          </p>
          <div className="mt-8 rounded-card bg-cream p-6">
            {inviteUrl ? (
              <DotQr value={inviteUrl} className="mx-auto aspect-square w-full max-w-xs" />
            ) : (
              <div className="mx-auto aspect-square w-full max-w-xs" />
            )}
          </div>
          <p className="mt-4 break-all text-center text-sm text-cream/75">{inviteUrl}</p>
        </div>
      </main>
    )
  }

  if (screen === "seat" && guest) {
    return (
      <main className="flex h-dvh flex-col px-2 pt-5 pb-2 text-cream sm:px-3">
        <OrnamentFrame />
        <header className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-2 pt-5 pb-3 sm:px-4">
          <button
            type="button"
            onClick={() => setScreen("find")}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-cream text-wine"
            aria-label="Quay lại tìm tên"
          >
            <ArrowLeft className="size-5" aria-hidden />
          </button>
          <div className="min-w-0">
            <p className="font-mark text-xs tracking-widest uppercase text-cream">{guest.side}</p>
            <h1 className="line-clamp-2 font-display text-2xl leading-tight sm:text-3xl">{guest.name}</h1>
            {guest.note && <p className="text-xs text-cream/80">{guest.note}</p>}
            <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-cream/75">
              Cùng bàn: {mates.map((mate) => mate.name).join(", ")}
            </p>
          </div>
          <div className="min-w-16 shrink-0 rounded-full bg-cream px-3.5 py-2 text-center text-wine">
            <p className="text-xs tracking-widest uppercase">Bàn</p>
            <p className="font-mark text-4xl leading-none">{guest.table}</p>
          </div>
        </header>
        <section className="relative min-h-0 flex-1">
          <FloorPlan activeTable={guest.table} focus={focus} onToggleFocus={() => setFocus((value) => !value)} />
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-3 py-3 text-cream sm:px-4">
      <OrnamentFrame />
      <div className="mx-auto grid min-h-[calc(100vh-1.5rem)] max-w-6xl lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)]">
        <section className="flex flex-col px-4 pt-7 pb-6 sm:px-8 sm:pt-8 sm:pb-10">
          <p className="font-mark text-sm tracking-widest uppercase text-cream">{eventCopy.kicker}</p>
          <h1 className="mt-4 max-w-sm font-display text-5xl uppercase tracking-wide sm:text-6xl">
            <span className="block leading-none">Sơ đồ</span>
            <span className="mt-3 block leading-snug">chỗ ngồi</span>
          </h1>
          <p className="mt-5 max-w-sm font-script text-4xl leading-tight text-cream">{eventCopy.thanks}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/80">{eventCopy.hint}</p>

          <form
            className="mt-8"
            onSubmit={(event) => {
              event.preventDefault()
              if (results[0]) pick(results[0])
            }}
          >
            <label htmlFor="guest-search" className="sr-only">
              Tên khách mời
            </label>
            <div className="flex items-center gap-2 rounded-full bg-cream px-4 text-wine">
              <Search className="size-5 shrink-0" aria-hidden />
              <input
                id="guest-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Nhập tên của bạn"
                autoComplete="off"
                className="h-14 w-full bg-transparent text-base outline-none placeholder:text-wine/45"
              />
              {query && (
                <button type="button" onClick={() => setQuery("")} aria-label="Xoá tên" className="text-wine">
                  <X className="size-5" aria-hidden />
                </button>
              )}
            </div>
          </form>

          <div className="mt-4" aria-live="polite">
            {query.trim() && results.length === 0 && (
              <p className="rounded-card border border-cream/25 px-4 py-4 text-sm leading-relaxed">
                Chưa thấy tên này trong danh sách. Thử tên không dấu, hoặc hỏi bàn lễ tân.
              </p>
            )}
            {results.length > 0 && (
              <ul className="flex flex-col gap-2">
                {results.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => pick(item)}
                      className="grid w-full grid-cols-[minmax(0,1fr)_4.25rem] items-center gap-3 rounded-2xl bg-cream px-4 py-2.5 text-left text-wine"
                    >
                      <span>
                        <span className="block text-sm leading-snug font-medium">{item.name}</span>
                        <span className="block text-xs leading-snug text-wine/70">
                          {item.side}
                          {item.note ? ` · ${item.note}` : ""}
                        </span>
                      </span>
                      <span className="text-center">
                        <span className="block text-xs tracking-widest uppercase">Bàn</span>
                        <span className="font-mark text-3xl leading-none">{item.table}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="button"
            onClick={() => setScreen("qr")}
            className="mt-auto inline-flex items-center gap-2 pt-10 text-sm text-cream/80"
          >
            <QrCode className="size-4" aria-hidden />
            Mã QR cho ban tổ chức
          </button>
        </section>

        <aside className="relative hidden min-h-screen p-4 lg:block">
          <FloorPlan activeTable={null} focus={false} />
          <p className="pointer-events-none absolute top-8 left-8 text-xs tracking-widest uppercase text-cream/70">
            Sảnh · 32 bàn
          </p>
        </aside>
      </div>
    </main>
  )
}
