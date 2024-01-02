import type { Metadata } from "next"

import { Login } from "@/components/login"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account.",
}

export default function Page() {
  return (
    <div className="w-full rounded-lg bg-white px-10 py-9 shadow-lg sm:min-w-[32rem]">
      <Login />
    </div>
  )
}
