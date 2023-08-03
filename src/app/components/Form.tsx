'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserType } from '@/types/User';
import axios from 'axios';

interface FormInterface extends UserType {
    agree: boolean
}
export default function Form() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<FormInterface>()

    const OnSubmit: SubmitHandler<FormInterface> = (data) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data)
          };

        fetch('/api/users', requestOptions)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err.response))
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
                id="username3"
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
                id="email3"
                placeholder="bonnie@example.com"
                {...register("email", { required: true })}
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
            {...register("password", { required: true })}
            />
        </div>
        <div className="flex items-center gap-2">
            <Checkbox id="agree" {...register("agree", { required: true })}/>
            <Label
            className="flex"
            htmlFor="agree"
            >
            <p>
                I agree with the 
            </p>
            <Link
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="/forms"
            >
                <p>
                terms and conditions
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


