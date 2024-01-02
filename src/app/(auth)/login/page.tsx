import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account.",
}

export default function Page() {
  return (
    <div className="w-full rounded-lg bg-white p-9 shadow-lg sm:min-w-[32rem]">
      <div>Login</div>
    </div>
  )
}
