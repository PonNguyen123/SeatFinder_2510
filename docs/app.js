const FULL = { x: 160, y: 280, w: 1760, h: 1640 }
const CANOPY =
  "M 211 530 C 250 430 340 372 430 376 C 540 382 640 430 760 456 C 900 478 1040 448 1180 404 C 1320 358 1480 324 1600 328 C 1700 332 1780 390 1836 500"
const CANOPY_INNER =
  "M 211 518 C 250 418 340 360 430 364 C 540 370 640 418 760 444 C 900 466 1040 436 1180 392 C 1320 346 1480 312 1600 316 C 1700 320 1780 378 1836 488"

const data = window.SEATING
const state = {
  screen: "find",
  query: "",
  guest: null,
  focus: true,
}

const app = document.querySelector("#app")

function fold(value) {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/đ/gi, "d")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim()
}

function searchGuests(query) {
  const needle = fold(query)
  if (!needle) return []
  return data.guests
    .map((guest) => {
      const name = fold(`${guest.name} ${guest.note ?? ""}`)
      const compact = name.replace(/ /g, "")
      const q = needle.replace(/ /g, "")
      let score = 0
      if (name === needle) score = 100
      else if (name.startsWith(needle)) score = 80
      else if (name.includes(needle)) score = 60
      else if (compact.includes(q)) score = 40
      else {
        const parts = needle.split(" ").filter(Boolean)
        if (parts.length > 1 && parts.every((part) => name.includes(part))) score = 50
      }
      return { guest, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.guest.name.localeCompare(b.guest.name, "vi"))
    .slice(0, 12)
    .map((item) => item.guest)
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function focusView(cx, cy) {
  const w = 640
  const h = 760
  return {
    x: Math.max(FULL.x, Math.min(cx - w / 2, FULL.x + FULL.w - w)),
    y: Math.max(FULL.y, Math.min(cy - h / 2 - 40, FULL.y + FULL.h - h)),
    w,
    h,
  }
}

function floorSvg(activeId, focus) {
  const active = data.tables.find((table) => table.id === activeId) ?? null
  const view = active && focus ? focusView(active.x, active.y) : FULL
  const dim = activeId != null
  const chairs = data.chairs
    .map((seat) => {
      const on = seat.t === activeId
      const hide = dim && !on
      return `<rect x="${seat.x}" y="${seat.y}" width="${seat.w}" height="${seat.h}" rx="4" fill="${on ? "var(--paper)" : "var(--sky)"}" stroke="${on ? "var(--sky)" : "none"}" stroke-width="${on ? 3 : 0}" opacity="${hide ? 0.22 : 1}"/>`
    })
    .join("")
  const marks = data.tables
    .map((table) => {
      const on = table.id === activeId
      const ring = on
        ? `<g class="seat-beacon"><circle cx="${table.x}" cy="${table.y}" r="118" fill="rgb(189 214 234 / 0.35)"/><circle class="seat-ring" cx="${table.x}" cy="${table.y}" r="96" fill="none" stroke="var(--cream)" stroke-width="8"/><circle class="seat-ring" cx="${table.x}" cy="${table.y}" r="78" fill="none" stroke="var(--sky)" stroke-width="4"/></g>`
        : ""
      return `<g opacity="${!dim || on ? 1 : 0.22}">${ring}<circle cx="${table.x}" cy="${table.y}" r="${on ? 40 : 34}" fill="${on ? "var(--cream)" : "var(--paper)"}"/><text x="${table.x}" y="${table.y + 2}" text-anchor="middle" dominant-baseline="middle" fill="var(--wine)" font-family="var(--display)" font-size="${on ? 36 : 30}" font-weight="600">${table.id}</text></g>`
    })
    .join("")
  const route = active
    ? `<path class="route-line" d="M 1204 1508 C 1204 ${(1508 + active.y) / 2}, ${active.x} ${(1508 + active.y) / 2}, ${active.x} ${active.y + 70}" fill="none" stroke="var(--cream)" stroke-width="6" stroke-linecap="round"/>`
    : ""
  const legend =
    !active || !focus
      ? `<g fill="var(--cream)" font-family="var(--sans)" font-size="18">
          <text x="250" y="1768">1–2  BrandBAE</text>
          <text x="250" y="1800">3 · 11  Client</text>
          <text x="250" y="1832">4  Người thương xa</text>
          <text x="250" y="1864">6  VTC Academy</text>
          <text x="820" y="1768">5 · 9 · 15 · 16  Cyclo</text>
          <text x="820" y="1800">7  Time Universal</text>
          <text x="820" y="1832">8  Mentor Mentee</text>
          <text x="820" y="1864">10  Bạn chú rể</text>
          <text x="1380" y="1768">12  GTC</text>
          <text x="1380" y="1800">13  Huflit · 14  Bluer</text>
          <text x="1380" y="1832">18 · 21  Gia đình chú rể</text>
          <text x="1380" y="1864">28 · 32  ĐN của mẹ</text>
        </g>`
      : ""
  return `<svg viewBox="${view.x} ${view.y} ${view.w} ${view.h}" role="img" aria-label="${active ? `Sơ đồ sảnh, bàn ${active.id}` : "Sơ đồ sảnh tiệc, 32 bàn"}">
    <path d="${CANOPY} L 1836 930 L 1867 930 L 1867 1552 L 211 1552 Z" fill="none" stroke="var(--cream)" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="${CANOPY_INNER}" fill="none" stroke="var(--cream)" stroke-opacity="0.55" stroke-width="1.3"/>
    <rect x="630" y="540" width="46" height="52" fill="var(--cream)"/>
    <rect x="996" y="540" width="48" height="52" fill="var(--cream)"/>
    <rect x="1363" y="540" width="46" height="52" fill="var(--cream)"/>
    <rect x="822" y="592" width="412" height="233" fill="var(--cream)"/>
    <text x="1028" y="716" text-anchor="middle" fill="var(--wine)" font-family="var(--display)" font-size="34" letter-spacing="10">SÂN KHẤU</text>
    <rect x="990" y="825" width="72" height="473" fill="var(--cream)"/>
    <rect x="386" y="1552" width="369" height="116" fill="none" stroke="var(--cream)" stroke-width="2.2"/>
    <rect x="755" y="1552" width="301" height="116" fill="none" stroke="var(--cream)" stroke-width="2.2"/>
    <rect x="1360" y="1552" width="507" height="152" fill="none" stroke="var(--cream)" stroke-width="2.2"/>
    <text x="1614" y="1636" text-anchor="middle" fill="var(--cream)" font-size="20" letter-spacing="6">STAFF ONLY</text>
    ${route}
    <path d="M1128 1552 A 58 58 0 0 1 1244 1552" fill="none" stroke="var(--cream)" stroke-width="2.2"/>
    <path d="M1244 1552 A 58 58 0 0 1 1360 1552" fill="none" stroke="var(--cream)" stroke-width="2.2"/>
    <path d="M1648 1552 A 52 52 0 0 1 1752 1552" fill="none" stroke="var(--cream)" stroke-width="2.2"/>
    <path d="M1752 1552 A 52 52 0 0 1 1856 1552" fill="none" stroke="var(--cream)" stroke-width="2.2"/>
    <text x="1204" y="1610" text-anchor="middle" fill="var(--cream)" font-size="16" letter-spacing="5">LỐI VÀO</text>
    ${legend}
    ${chairs}
    ${marks}
  </svg>`
}

function pin(activeId, focus) {
  const active = data.tables.find((table) => table.id === activeId)
  if (!active) return ""
  const view = focus ? focusView(active.x, active.y) : FULL
  const x = ((active.x - view.x) / view.w) * 100
  const y = ((active.y - view.y) / view.h) * 100
  const above = y > 22
  return `<div class="pin seat-beacon" style="left:${x}%;top:${y}%;transform:${above ? "translate(-50%, calc(-100% - 4.8rem))" : "translate(-50%, 3rem)"}"><em>Bàn của bạn</em><b>${active.id}</b></div>`
}

function pageUrl() {
  const url = new URL(window.location.href)
  url.search = ""
  url.hash = ""
  return url.toString()
}

function dotQr(value) {
  const qr = qrcode(0, "H")
  qr.addData(value)
  qr.make()
  const n = qr.getModuleCount()
  const quiet = 2
  const total = n + quiet * 2
  const finderAt = [
    [0, 0],
    [n - 7, 0],
    [0, n - 7],
  ]
  const inFinder = (x, y) => finderAt.some(([ox, oy]) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7)
  let dots = ""
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (!qr.isDark(y, x) || inFinder(x, y)) continue
      dots += `<circle cx="${x + quiet + 0.5}" cy="${y + quiet + 0.5}" r="0.36" fill="var(--navy)"/>`
    }
  }
  const finders = finderAt
    .map(
      ([x, y]) => `<g transform="translate(${x + quiet} ${y + quiet})"><rect width="7" height="7" rx="1.4" fill="var(--wine)"/><rect x="1" y="1" width="5" height="5" rx="0.8" fill="var(--cream)"/><rect x="2" y="2" width="3" height="3" rx="0.6" fill="var(--navy)"/></g>`,
    )
    .join("")
  return `<svg viewBox="0 0 ${total} ${total}" role="img" aria-label="Mã QR"><rect width="${total}" height="${total}" rx="1.4" fill="var(--cream)"/>${finders}${dots}</svg>`
}

function render() {
  const copy = data.eventCopy
  if (state.screen === "qr") {
    const url = pageUrl()
    app.innerHTML = `<main class="qr-page">
      <button class="back" id="back" type="button">← Quay lại</button>
      <p class="kicker" style="margin-top:2.5rem">${esc(copy.kicker)}</p>
      <h1>Mã mời</h1>
      <p class="hint">In hoặc chiếu mã này. Khách quét bằng điện thoại sẽ mở trang tìm chỗ ngồi.</p>
      <div class="qr-card">${dotQr(url)}</div>
      <p class="url">${esc(url)}</p>
    </main>`
    document.querySelector("#back").onclick = () => {
      state.screen = "find"
      render()
    }
    return
  }

  if (state.screen === "seat" && state.guest) {
    const guest = state.guest
    const mates = data.guests.filter((item) => item.table === guest.table && item.id !== guest.id)
    app.innerHTML = `<main class="seat">
      <header class="seat-head">
        <button class="icon-btn" id="back" type="button" aria-label="Quay lại">←</button>
        <div>
          <p class="side">${esc(guest.side)}</p>
          <h1>${esc(guest.name)}</h1>
          ${guest.note ? `<p class="note">${esc(guest.note)}</p>` : ""}
          <p class="mates">Cùng bàn: ${esc(mates.map((mate) => mate.name).join(", "))}</p>
        </div>
        <div class="badge"><span>Bàn</span><b>${guest.table}</b></div>
      </header>
      <section class="map-wrap">
        ${floorSvg(guest.table, state.focus)}
        ${pin(guest.table, state.focus)}
        <button class="zoom" id="zoom" type="button">${state.focus ? "Xem toàn sảnh" : "Phóng bàn của bạn"}</button>
      </section>
    </main>`
    document.querySelector("#back").onclick = () => {
      state.screen = "find"
      state.guest = null
      render()
    }
    document.querySelector("#zoom").onclick = () => {
      state.focus = !state.focus
      render()
    }
    return
  }

  const results = searchGuests(state.query)
  const list = state.query.trim()
    ? results.length
      ? `<ul class="results">${results
          .map(
            (item) => `<li><button class="result" type="button" data-id="${esc(item.id)}"><span><strong>${esc(item.name)}</strong><small>${esc(item.side)}${item.note ? ` · ${esc(item.note)}` : ""}</small></span><span class="table-no"><span>Bàn</span><b>${item.table}</b></span></button></li>`,
          )
          .join("")}</ul>`
      : `<p class="empty">Chưa thấy tên này trong danh sách. Thử tên không dấu, hoặc hỏi bàn lễ tân.</p>`
    : ""

  app.innerHTML = `<div class="home">
    <section class="find">
      <p class="kicker">${esc(copy.kicker)}</p>
      <h1>Sơ đồ<span class="second">chỗ ngồi</span></h1>
      <p class="thanks">${esc(copy.thanks)}</p>
      <p class="hint">${esc(copy.hint)}</p>
      <form id="find-form">
        <div class="search">
          <span aria-hidden="true">⌕</span>
          <input id="guest-search" value="${esc(state.query)}" placeholder="Nhập tên của bạn" autocomplete="off" />
        </div>
      </form>
      ${list}
      <button class="quiet" id="open-qr" type="button">Mã QR cho ban tổ chức</button>
    </section>
    <aside class="hall">
      <div class="map-wrap">${floorSvg(null, false)}</div>
      <p class="hall-label">Sảnh · 32 bàn</p>
    </aside>
  </div>`

  const input = document.querySelector("#guest-search")
  input.focus()
  input.setSelectionRange(input.value.length, input.value.length)
  input.oninput = () => {
    state.query = input.value
    render()
  }
  document.querySelector("#find-form").onsubmit = (event) => {
    event.preventDefault()
    if (results[0]) pick(results[0])
  }
  document.querySelectorAll("[data-id]").forEach((button) => {
    button.onclick = () => pick(data.guests.find((item) => item.id === button.dataset.id))
  })
  document.querySelector("#open-qr").onclick = () => {
    state.screen = "qr"
    render()
  }
}

function pick(guest) {
  state.guest = guest
  state.focus = true
  state.screen = "seat"
  render()
}

render()
