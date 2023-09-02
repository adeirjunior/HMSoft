'use client';

import { Button, Label, TextInput } from 'flowbite-react';

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
        <Button type="submit">
            Login
        </Button>
    </form>
  )
}


