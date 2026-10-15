const FULL = { x: 180, y: 330, w: 1720, h: 1420 }

const state = {
  screen: "find",
  query: "",
  guest: null,
  focus: true,
  eventCopy: null,
  guests: [],
  tables: [],
  chairs: [],
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
  return state.guests
    .map((guest) => {
      const name = fold(guest.name)
      let score = 0
      if (name === needle) score = 100
      else if (name.startsWith(needle)) score = 80
      else if (name.includes(needle)) score = 60
      else if (name.replace(/ /g, "").includes(needle.replace(/ /g, ""))) score = 40
      return { guest, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.guest.name.localeCompare(b.guest.name, "vi"))
    .slice(0, 8)
    .map((item) => item.guest)
}

function esc(value) {
  return String(value)
    .replace(/&/g, "\u0026amp;")
    .replace(/</g, "\u0026lt;")
    .replace(/>/g, "\u0026gt;")
    .replace(/"/g, "\u0026quot;")
}

function focusView(cx, cy) {
  const w = 640
  const h = 760
  const x = Math.max(FULL.x, Math.min(cx - w / 2, FULL.x + FULL.w - w))
  const y = Math.max(FULL.y, Math.min(cy - h / 2 - 40, FULL.y + FULL.h - h))
  return { x, y, w, h }
}

function floorSvg(activeId, focus) {
  const active = state.tables.find((table) => table.id === activeId) || null
  const view = active && focus ? focusView(active.x, active.y) : FULL
  const chairs = state.chairs
    .map((seat) => {
      const on = seat.t === activeId
      const fill = on ? "var(--paper)" : "var(--sky)"
      const stroke = on ? ' stroke="var(--cream)" stroke-width="2"' : ""
      const opacity = activeId && !on ? ' opacity="0.42"' : ""
      return `<rect x="${seat.x}" y="${seat.y}" width="${seat.w}" height="${seat.h}" rx="4" fill="${fill}"${stroke}${opacity}/>`
    })
    .join("")
  const marks = state.tables
    .map((table) => {
      const on = table.id === activeId
      const opacity = activeId && !on ? ' opacity="0.42"' : ""
      const ring = on
        ? `<circle cx="${table.x}" cy="${table.y}" r="86" class="seat-ring" fill="none" stroke="var(--cream)" stroke-width="7"/>`
        : ""
      return `<g${opacity}>${ring}<circle cx="${table.x}" cy="${table.y}" r="34" fill="${on ? "var(--cream)" : "var(--paper)"}"/><text x="${table.x}" y="${table.y + 2}" text-anchor="middle" dominant-baseline="middle" fill="var(--wine)" font-family="var(--display)" font-size="${on ? 36 : 30}" font-weight="600">${table.id}</text></g>`
    })
    .join("")

  return `<svg viewBox="${view.x} ${view.y} ${view.w} ${view.h}" role="img" aria-label="Sơ đồ sảnh">
    <path d="M211 530 C250 430 340 368 460 378 C560 386 640 430 760 456 C900 478 1040 450 1180 410 C1360 354 1560 318 1700 338 C1780 350 1824 420 1836 520 L1836 936 L1867 936 L1867 1552 L211 1552 Z" fill="none" stroke="var(--cream)" stroke-width="3"/>
    <rect x="630" y="528" width="46" height="58" fill="var(--cream)"/>
    <rect x="996" y="528" width="46" height="58" fill="var(--cream)"/>
    <rect x="1364" y="528" width="44" height="58" fill="var(--cream)"/>
    <rect x="822" y="612" width="412" height="198" fill="var(--cream)"/>
    <text x="1028" y="724" text-anchor="middle" fill="var(--wine)" font-family="var(--display)" font-size="42" letter-spacing="8">SÂN KHẤU</text>
    <rect x="990" y="810" width="72" height="560" fill="var(--cream)"/>
    <rect x="386" y="1552" width="366" height="120" fill="none" stroke="var(--cream)" stroke-width="3"/>
    <rect x="752" y="1552" width="296" height="120" fill="none" stroke="var(--cream)" stroke-width="3"/>
    <rect x="1360" y="1552" width="507" height="156" fill="none" stroke="var(--cream)" stroke-width="3"/>
    <text x="1613" y="1640" text-anchor="middle" fill="var(--cream)" font-size="26" letter-spacing="6">STAFF ONLY</text>
    <path d="M1128 1552 A 58 58 0 0 1 1244 1552" fill="none" stroke="var(--cream)" stroke-width="3"/>
    <path d="M1244 1552 A 58 58 0 0 1 1360 1552" fill="none" stroke="var(--cream)" stroke-width="3"/>
    <path d="M1648 1552 A 52 52 0 0 1 1752 1552" fill="none" stroke="var(--cream)" stroke-width="3"/>
    <path d="M1752 1552 A 52 52 0 0 1 1856 1552" fill="none" stroke="var(--cream)" stroke-width="3"/>
    <text x="1244" y="1616" text-anchor="middle" fill="var(--cream)" font-size="22" letter-spacing="4">LỐI VÀO</text>
    ${chairs}${marks}
  </svg>`
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
      ([x, y]) => `<g transform="translate(${x + quiet} ${y + quiet})">
        <rect width="7" height="7" rx="1.4" fill="var(--wine)"/>
        <rect x="1" y="1" width="5" height="5" rx="0.8" fill="var(--cream)"/>
        <rect x="2" y="2" width="3" height="3" rx="0.6" fill="var(--navy)"/>
      </g>`,
    )
    .join("")
  return `<svg viewBox="0 0 ${total} ${total}" role="img" aria-label="Mã QR">${`<rect width="${total}" height="${total}" rx="1.4" fill="var(--cream)"/>`}${finders}${dots}</svg>`
}

function render() {
  if (!state.eventCopy) {
    app.innerHTML = ""
    return
  }
  const copy = state.eventCopy
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
    const mates = state.guests.filter((item) => item.table === guest.table && item.id !== guest.id)
    app.innerHTML = `<main class="seat">
      <header class="seat-head">
        <button class="icon-btn" id="back" type="button" aria-label="Quay lại">←</button>
        <div class="seat-copy">
          <p class="kicker">${esc(guest.side)}</p>
          <h1>${esc(guest.name)}</h1>
          <p class="mates">Cùng bàn: ${esc(mates.map((mate) => mate.name).join(", "))}</p>
        </div>
        <div class="badge"><span>Bàn</span><b>${guest.table}</b></div>
      </header>
      <section class="seat-map">
        ${floorSvg(guest.table, state.focus)}
        <button class="hall-btn" id="toggle" type="button">${state.focus ? "Xem toàn sảnh" : "Phóng bàn của bạn"}</button>
      </section>
    </main>`
    document.querySelector("#back").onclick = () => {
      state.screen = "find"
      render()
    }
    document.querySelector("#toggle").onclick = () => {
      state.focus = !state.focus
      render()
    }
    return
  }

  const results = searchGuests(state.query)
  const list = state.query.trim()
    ? results.length
      ? `<div class="results">${results
          .map(
            (guest) => `<button class="result" type="button" data-id="${esc(guest.id)}">
              <span>${esc(guest.name)}<small>${esc(guest.side)}</small></span>
              <strong>Bàn ${guest.table}</strong>
            </button>`,
          )
          .join("")}</div>`
      : `<p class="empty">Chưa thấy tên này trong danh sách. Thử tên không dấu, hoặc hỏi bàn lễ tân.</p>`
    : `<p class="note">${esc(copy.sampleNote)}</p>`

  app.innerHTML = `<div class="shell">
    <section class="panel">
      <p class="kicker">${esc(copy.kicker)}</p>
      <h1>${esc(copy.title)}</h1>
      <p class="thanks">${esc(copy.thanks)}</p>
      <p class="hint">${esc(copy.hint)}</p>
      <form id="find-form">
        <label class="search">
          <span aria-hidden="true">⌕</span>
          <input id="guest-search" placeholder="Nhập tên của bạn" autocomplete="off" value="${esc(state.query)}" />
        </label>
      </form>
      ${list}
      <button class="qr-link" id="open-qr" type="button">Mã QR cho ban tổ chức</button>
    </section>
    <aside class="map-pane">
      ${floorSvg(null, false)}
      <p class="map-label">Sảnh · 32 bàn</p>
    </aside>
  </div>`

  const input = document.querySelector("#guest-search")
  input.focus()
  const pos = input.value.length
  input.setSelectionRange(pos, pos)
  input.addEventListener("input", () => {
    state.query = input.value
    render()
  })
  document.querySelector("#find-form").addEventListener("submit", (event) => {
    event.preventDefault()
    const first = searchGuests(state.query)[0]
    if (!first) return
    state.guest = first
    state.focus = true
    state.screen = "seat"
    render()
  })
  document.querySelectorAll("[data-id]").forEach((button) => {
    button.onclick = () => {
      state.guest = state.guests.find((guest) => guest.id === button.dataset.id) || null
      state.focus = true
      state.screen = "seat"
      render()
    }
  })
  document.querySelector("#open-qr").onclick = () => {
    state.screen = "qr"
    render()
  }
}

Promise.all([fetch("guests.json").then((res) => res.json()), fetch("floor.json").then((res) => res.json())]).then(
  ([people, floor]) => {
    state.eventCopy = people.eventCopy
    state.guests = people.guests
    state.tables = floor.tables
    state.chairs = floor.chairs
    render()
  },
)
