'use client';

import { UserType } from '@/types/User';
import { Button, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function Form() {
    const {
        register,
        handleSubmit,
    } = useForm<UserType>()

    const OnSubmit: SubmitHandler<UserType> = (data) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data)
        };

        fetch('/api/auth/login', requestOptions)
            .then(res => res.json())
            .catch(err => console.log(err.message))
    };
    return (
        <form onSubmit={handleSubmit(OnSubmit)} className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="username"
                        value="Username"
                    />
                </div>
                <TextInput
                    addon="@"
                    id="username"
                    placeholder="Bonnie Green"
                    {...register("username", { required: true })}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password"
                        value="Your password"
                    />
                </div>
                <TextInput
                    id="password"
                    shadow
                    type="password"
                    {...register("password", { required: true })}
                />
            </div>
            <div className="flex items-center gap-2">
                <Label
                    className="flex"
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
