import { LogoMark } from "@/components/logo"
import { Container } from "@/components/container"

import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container
        className="flex flex-col gap-y-2 py-5 sm:flex-row sm:items-center
          sm:justify-between sm:gap-x-4 sm:gap-y-0"
      >
        <div className="flex items-center">
          <LogoMark className="w-9" />
        </div>
        <div className="flex items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
