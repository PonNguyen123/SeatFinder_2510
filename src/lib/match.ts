import type { Guest } from "@/data/guests"

export function fold(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim()
}

export function searchGuests(guests: Guest[], query: string) {
  const needle = fold(query)
  if (needle.length < 1) return []
  const ranked = guests
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
  return ranked.slice(0, 12).map((item) => item.guest)
}
