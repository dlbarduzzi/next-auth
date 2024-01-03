import type { Metadata } from "next"

import { Register } from "@/components/register"

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up for a new account.",
}

export default function Page() {
  return (
    <div className="w-full rounded-lg bg-white px-10 py-9 shadow-lg sm:min-w-[32rem]">
      <Register />
    </div>
  )
}
