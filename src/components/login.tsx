"use client"

import type { LoginSchema } from "@/schemas/login"

import Link from "next/link"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa6"

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

import { login } from "@/actions/login"
import { loginSchema } from "@/schemas/login"

export function Login() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: LoginSchema) {
    await login(data)
  }

  return (
    <div className="flex flex-col gap-y-8">
      <div>
        <p className="text-xl font-bold tracking-tight text-gray-800">Welcome back!</p>
      </div>
      <div>
        <h3 className="font-medium text-gray-800">Sign in</h3>
        <p className="text-sm text-gray-500">Choose your preferred sign in method.</p>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="light" className="relative h-12 justify-start">
          <FaGithub className="h-6 w-6" aria-hidden="true" />
          <span className="absolute left-1/2 -translate-x-1/2">
            Sign in with GitHub
          </span>
        </Button>
        <Button variant="light" className="relative h-12 justify-start">
          <FcGoogle className="h-6 w-6" aria-hidden="true" />
          <span className="absolute left-1/2 -translate-x-1/2">
            Sign in with Google
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
        <span>Don&apos;t have an account?&nbsp;</span>
        <Link
          href="/register"
          prefetch={false}
          className="text-blue-500 underline underline-offset-2 hover:text-blue-600"
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}
