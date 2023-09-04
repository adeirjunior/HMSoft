'use client';

import { Button, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';

export default function Form() {
  return (
    <form className="flex max-w-md flex-col gap-4">
        <div>
            <div className="mb-2 block">
                <Label
                htmlFor="username"
                value="Username"
                />
            </div>
            <TextInput
                addon="@"
                id="username3"
                placeholder="Bonnie Green"
            />
        </div>
        <div>
            <div className="mb-2 block">
            <Label
                htmlFor="password2"
                value="Your password"
            />
            </div>
            <TextInput
            id="password2"
            shadow
            type="password"
            />
        </div>
        <div className="flex items-center gap-2">
            <Label
            className="flex"
            htmlFor="agree"
            >
            <p>
                Don&apos;t have an account?
            </p>
            <Link
                className="text-cyan-600 hover:underline dark:text-cyan-500 ml-1"
                href="/register"
            >
                <p>
                Sign up
                </p>
            </Link>
            </Label>
        </div>
        <Button type="submit">
            Login
        </Button>
    </form>
  )
}


