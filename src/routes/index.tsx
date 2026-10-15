import { createFileRoute } from "@tanstack/react-router"
import { SeatingApp } from "@/components/seating-app"

export const Route = createFileRoute("/")({ component: Home })

function Home() {
  return <SeatingApp />
}
