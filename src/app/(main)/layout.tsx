import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-white">{children}</main>
      <SiteFooter />
    </div>
  )
}
