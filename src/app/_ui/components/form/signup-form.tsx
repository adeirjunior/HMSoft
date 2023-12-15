"use client";

import { lusitana } from "@/app/_ui/fonts";
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./../button";
import { useFormState, useFormStatus } from "react-dom";
import { createUser } from "@/lib/actions/user.actions";
import { Card, Link } from "@nextui-org/react";

export default function SignupForm() {
  const initialState = { message: null, errors: {} };
  const [state, action] = useFormState(createUser, initialState);

  return (
    <form action={action} className="space-y-3">
      <Card className="flex-1 rounded-lg px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please sign up to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium "
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="username"
                type="text"
                name="username"
                placeholder="Enter your username"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {state.errors?.username ? (
            <div className="flex h-8 items-end space-x-1">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p aria-live="polite" className="text-sm text-red-500">
                {state.errors.username.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </p>
            </div>
          ) : null}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {state.errors?.email ? (
            <div className="flex h-8 items-end space-x-1">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p aria-live="polite" className="text-sm text-red-500">
                {state.errors.email.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </p>
            </div>
          ) : null}
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium "
              htmlFor="passwordConfirm"
            >
              Password again
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="passwordConfirm"
                type="password"
                name="passwordConfirm"
                placeholder="Repeat password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {state.errors?.password ? (
            <div className="flex h-8 items-end space-x-1">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p aria-live="polite" className="text-sm text-red-500">
                {state.errors.password.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </p>
            </div>
          ) : null}
        </div>
        <SignupButton />
        {state.message ? (
          <div className="flex h-8 items-end space-x-1">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p aria-live="polite" className="text-sm text-red-500">
              {state.message}
            </p>
          </div>
        ) : null}
      </Card>
      <p>
        Already have an account? <Link href="/login">Log in</Link>.
      </p>
    </form>
  );
}

function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Sign up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
