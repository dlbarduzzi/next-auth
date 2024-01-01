"use client"

import { MdClose } from "react-icons/md"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"

import { LogoMark } from "@/components/logo"
import { Separator } from "@/components/ui/separator"

type MobileNavbarProps = {
  isNavbarOpen: boolean
  setIsNavbarOpen: (isOpen: boolean) => void
}

export function MobileNavbar({ isNavbarOpen, setIsNavbarOpen }: MobileNavbarProps) {
  return (
    <div>
      <Transition.Root as={Fragment} show={isNavbarOpen}>
        <Dialog as="div" onClose={setIsNavbarOpen} className="relative z-50 md:hidden">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>
          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-sm flex-1 pr-16">
                <div className="flex-grow overflow-y-auto bg-white pb-8">
                  <div className="flex items-center justify-between gap-x-3 px-4 py-5">
                    <LogoMark />
                    <button
                      type="button"
                      onClick={() => setIsNavbarOpen(false)}
                      className="-mr-1 flex h-6 w-6 flex-shrink-0 items-center
                        justify-center rounded-full bg-white text-gray-600
                        transition-colors hover:bg-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
                    >
                      <span className="sr-only">Open sidebar</span>
                      <MdClose className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                  <Separator />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
