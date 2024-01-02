import Link from "next/link"

import { Logo } from "@/components/logo"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-20 px-5 py-4">
        <Link
          href="/"
          prefetch={false}
          className="focus-visible:outline-2 focus-visible:outline-offset-4
            focus-visible:outline-gray-800"
        >
          <Logo className="w-20" />
          <span className="sr-only">Home page link.</span>
        </Link>
      </header>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-400" />
      <main
        className="z-20 flex items-center justify-center px-5 pt-16
          sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
          sm:pt-0"
      >
        {children}
      </main>
    </div>
  )
}
