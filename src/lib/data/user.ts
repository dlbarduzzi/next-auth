import { db } from "@/lib/db"

export async function getUserById(id: string) {
  return await db.user.findUnique({ where: { id } })
}

export async function getUserByEmail(email: string) {
  return await db.user.findUnique({ where: { email } })
}

export async function getUserHashedPassword(id: string) {
  return await db.hashedPassword.findUnique({ where: { userId: id } })
}
