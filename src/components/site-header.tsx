import Link from "next/link"

import { Logo } from "@/components/logo"
import { Container } from "@/components/container"

export function SiteHeader() {
  return (
    <header className="border-b border-b-gray-200 bg-white">
      <Container className="flex h-20 items-center py-2">
        <div>
          <Link href="/">
            <Logo className="w-24 md:w-32" />
            <span className="sr-only">Home page link.</span>
          </Link>
        </div>
      </Container>
    </header>
  )
}
