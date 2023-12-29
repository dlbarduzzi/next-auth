"use client"

import Link from "next/link"

import { Disclosure } from "@headlessui/react"
import { Fragment } from "react"

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
]

export function Navbar() {
  return (
    <Disclosure as="nav">
      {() => (
        <Fragment>
          <div className="flex items-center gap-x-6">
            {navigation.map(nav => (
              <Link
                key={nav.name}
                href={nav.href}
                prefetch={false}
                className="text-sm font-medium text-gray-800 focus-visible:outline-2
                  focus-visible:outline-offset-2 focus-visible:outline-gray-800"
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </Fragment>
      )}
    </Disclosure>
  )
}
