import { env } from "@/config/env"

export type SiteConfig = {
  name: string
  description: string
  url: string
}

export const siteConfig: SiteConfig = {
  name: "NextAuth",
  description: "An introduction to next-auth authentication app.",
  url: env.NEXT_PUBLIC_APP_URL,
}
