"use client"

import type { RegisterSchema } from "@/schemas/register"

import Link from "next/link"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { FcGoogle } from "react-icons/fc"
import { FaGithub, FaCheck } from "react-icons/fa6"
import { MdErrorOutline } from "react-icons/md"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/spinner"

import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form"

import { register } from "@/actions/register"
import { registerSchema } from "@/schemas/register"

export function Register() {
  const [results, setResults] = useState({ error: "", message: "" })

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: RegisterSchema) {
    setResults({ error: "", message: "" })

    const res = await register(data)

    if (!res.ok) {
      setResults({ error: res.error, message: "" })
      return
    }

    setResults({ error: "", message: res.message })
  }

  return (
    <div className="flex flex-col gap-y-8">
      <div>
        <p className="text-xl font-bold tracking-tight text-gray-800">Welcome!</p>
      </div>
      <div>
        <h3 className="font-medium text-gray-800">Sign up</h3>
        <p className="text-sm text-gray-500">Choose your preferred sign up method.</p>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="light" className="relative h-12 justify-start">
          <FaGithub className="h-6 w-6" aria-hidden="true" />
          <span className="absolute left-1/2 -translate-x-1/2">
            Sign up with GitHub
          </span>
        </Button>
        <Button variant="light" className="relative h-12 justify-start">
          <FcGoogle className="h-6 w-6" aria-hidden="true" />
          <span className="absolute left-1/2 -translate-x-1/2">
            Sign up with Google
          </span>
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm leading-6">
          <span className="bg-white px-6 text-gray-500">Or continue with</span>
        </div>
      </div>
      {results.error !== "" ? (
        <div
          className="flex flex-wrap items-center gap-x-2 rounded bg-red-100
            px-4 py-4"
        >
          <MdErrorOutline className="h-5 w-5 text-red-600" aria-hidden="true" />
          <span className="text-sm text-red-800">{results.error}</span>
        </div>
      ) : null}
      {results.message !== "" ? (
        <div
          className="flex flex-wrap items-center gap-x-2 rounded bg-green-100
          px-4 py-4"
        >
          <FaCheck className="h-5 w-5 text-green-600" aria-hidden="true" />
          <span className="text-sm text-green-800">{results.message}</span>
        </div>
      ) : null}
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-y-6"
          >
            <div className="col-span-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <div className="pt-2">
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          disabled={form.formState.isSubmitting}
                          hasError={!!form.formState.errors.email}
                          placeholder="you@example.com"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-full">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <div className="pt-2">
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          disabled={form.formState.isSubmitting}
                          hasError={!!form.formState.errors.password}
                          placeholder=""
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="group h-12 w-full disabled:bg-gray-600"
              >
                <Spinner
                  size="sm"
                  className="absolute h-7 w-7 group-enabled:opacity-0"
                />
                <span className="group-disabled:opacity-0">Sign in</span>
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="text-sm text-gray-600">
        <span>Already have an account?&nbsp;</span>
        <Link
          href="/login"
          prefetch={false}
          className="text-blue-500 underline underline-offset-2 hover:text-blue-600"
        >
          Sign in
        </Link>
      </div>
    </div>
  )
}
