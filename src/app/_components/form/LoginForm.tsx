'use client';

import { UserWithPass } from '@/types/User';
import { Button, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import LoadingDots from '../LoadingDots';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function Form() {
    const {
        register,
        handleSubmit,
    } = useForm<UserWithPass>()
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const OnSubmit: SubmitHandler<UserWithPass> = (data) => {
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data)
        };

        fetch('/api/auth/login', requestOptions)
            .then((res) => res.json())
            .then(() => {
                setLoading(false);
                router.refresh()
                router.push("profile")
            })
            .catch(err => {
                toast.error(err.message);
                console.log(err)
            })
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
            <Button disabled={loading} type="submit">
                {loading ? (
                    <LoadingDots color="#eeeeee" />
                ) : (
                    <p>Login</p>
                )}
            </Button>
        </form>
    )
}
