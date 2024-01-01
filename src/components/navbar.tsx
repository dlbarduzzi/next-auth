"use client"

import Link from "next/link"

import { FaBars } from "react-icons/fa6"
import { Fragment, useState } from "react"
import { Disclosure } from "@headlessui/react"

import { MobileNavbar } from "@/components/mobile-navbar"
import { buttonVariants } from "@/components/ui/button"

import { cn } from "@/lib/utils"

type Navigation = {
  name: string
  href: string
}

const navigation: Navigation[] = [
  {
    name: "Server",
    href: "/server",
  },
  {
    name: "Client",
    href: "/client",
  },
  {
    name: "Admin",
    href: "/admin",
  },
  {
    name: "Settings",
    href: "/settings",
  },
]

export function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  return (
    <Fragment>
      <Disclosure as="nav">
        {() => (
          <Fragment>
            <div className="flex items-center gap-x-8">
              {navigation.map(nav => (
                <Link
                  key={nav.name}
                  href={nav.href}
                  prefetch={false}
                  className="hidden text-sm font-medium text-gray-800
                    focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-gray-800 md:block"
                >
                  {nav.name}
                </Link>
              ))}
              <Link
                prefetch={false}
                href="/sign-in"
                className={cn(buttonVariants(), "hidden md:inline-flex")}
              >
                Sign in
              </Link>
              <button
                type="button"
                onClick={() => setIsNavbarOpen(true)}
                className="flex h-11 w-11 items-center justify-center rounded-full
                  bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300
                  focus:outline-none focus:ring-2 focus:ring-gray-400
                  focus:ring-offset-2 md:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <FaBars className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </Fragment>
        )}
      </Disclosure>
      <MobileNavbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
    </Fragment>
  )
}
