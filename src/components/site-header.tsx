import Link from "next/link"

import { Navbar } from "@/components/navbar"
import { Container } from "@/components/container"
import { Logo, LogoMark } from "@/components/logo"

export function SiteHeader() {
  return (
    <header className="border-b border-b-gray-200 bg-white">
      <Container className="flex h-20 items-center justify-between gap-x-6 py-2">
        <div>
          <Link
            href="/"
            prefetch={false}
            className="focus-visible:outline-2 focus-visible:outline-offset-4
              focus-visible:outline-gray-800"
          >
            <Logo className="hidden md:block" />
            <LogoMark className="md:hidden" />
            <span className="sr-only">Home page link.</span>
          </Link>
        </div>
        <div>
          <Navbar />
        </div>
      </Container>
    </header>
  )
}
