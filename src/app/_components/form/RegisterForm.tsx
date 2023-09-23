'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserWithPass } from '@/types/User';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface FormInterface extends UserWithPass {
    agree: boolean
    passwordConfirm: string
}

export default function Form() {
    const {
        register,
        handleSubmit,
    } = useForm<FormInterface>()
    const router = useRouter();

    const OnSubmit: SubmitHandler<FormInterface> = (data) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data)
        };

        fetch('/api/auth/register', requestOptions)
            .then((res) => res.json())
            .then(() => {
                toast.success("Account created! Redirecting to login...");
                setTimeout(() => {
                    router.push("/login");
                }, 2000)
            })
            .catch(err => console.log(err))
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
                        htmlFor="email"
                        value="Email"
                    />
                </div>
                <TextInput
                    icon={HiMail}
                    id="email"
                    placeholder="bonnie@example.com"
                    {...register("email", { required: true })}
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
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="passwordConfirm"
                        value="Your password again"
                    />
                </div>
                <TextInput
                    id="passwordConfirm"
                    shadow
                    type="password"
                    {...register("passwordConfirm", { required: true })}
                />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="agree" {...register("agree", { required: true })} />
                <Label
                    className="flex"
                    htmlFor="agree"
                >
                    <p>
                        I agree with the
                    </p>
                    <Link
                        className="text-cyan-600 hover:underline dark:text-cyan-500 ml-1"
                        href="/terms"
                    >
                        <p>
                            terms and conditions
                        </p>
                    </Link>
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Label
                    className="flex"
                >
                    <p>
                        Alredy have an account?
                    </p>
                    <Link
                        className="text-cyan-600 hover:underline dark:text-cyan-500 ml-1"
                        href="/login"
                    >
                        <p>
                            Sign in
                        </p>
                    </Link>
                </Label>
            </div>
            <Button type="submit">
                Register new account
            </Button>
        </form>
    )
}


