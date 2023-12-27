import { Container } from "@/components/container"

import { db } from "@/lib/db"

export default async function Page() {
  const users = await db.user.findMany()
  return (
    <Container>
      <section aria-labelledby="homepage-header" className="py-4">
        <h2 id="homepage-header">Welcome!</h2>
        <div className="pt-6">
          <div className="space-y-3 rounded-lg bg-gray-100 px-5 py-4">
            <h3 className="font-medium text-gray-800">Users</h3>
            <pre>{JSON.stringify(users, null, 2)}</pre>
          </div>
        </div>
      </section>
    </Container>
  )
}
