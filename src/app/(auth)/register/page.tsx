import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up for a new account.",
}

export default function Page() {
  return (
    <div className="w-full rounded-lg bg-white p-9 shadow-lg sm:min-w-[32rem]">
      <div>Register</div>
    </div>
  )
}
