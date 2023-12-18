"use server";

import { genSaltSync, hashSync } from "bcrypt";
import { UserState } from "@/_lib/definitions/user.definitions";
import { createUserQuery } from "@/_lib/queries/user.queries";
import { CreateUserSchema as CreateUser } from "@/_lib/schemas/user.schema";
import { redirect } from "next/navigation";

export async function createUser(
  prevState: UserState,
  formData: FormData
): Promise<UserState> {
  const validatedFields = CreateUser.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    passwordConfirm: formData.get("passwordConfirm"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }

  const { email, password, username } = validatedFields.data;

  const salt = genSaltSync(10);
  const hash = hashSync(password, salt);

  try {
    await createUserQuery({ email, password: hash, username });
  } catch (error: any) {
    console.error(error.message);
    return {
      message: `Database Error: Failed to Create User.`,
    };
  }

  redirect("/login");
}
