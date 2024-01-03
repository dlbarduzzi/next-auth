"use server"

import type { LoginSchema } from "@/schemas/login"

import { sleep } from "@/lib/utils"

export async function login(data: LoginSchema) {
  await sleep(2000)
  console.log(console.log(data))
}
