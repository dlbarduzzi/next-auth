import Link from "next/link"

import { Container } from "@/components/container"
import { Logo, LogoMark } from "@/components/logo"

export function SiteHeader() {
  return (
    <header className="border-b border-b-gray-200 bg-white">
      <Container className="flex h-20 items-center py-2">
        <div>
          <Link href="/">
            <Logo className="hidden md:block" />
            <LogoMark className="md:hidden" />
            <span className="sr-only">Home page link.</span>
          </Link>
        </div>
      </Container>
    </header>
  )
}
