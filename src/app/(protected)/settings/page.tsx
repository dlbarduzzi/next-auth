import { auth, signOut } from "@/lib/auth"
import { Button } from "@/components/ui/button"

export default async function Page() {
  const session = await auth()
  return (
    <div>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
