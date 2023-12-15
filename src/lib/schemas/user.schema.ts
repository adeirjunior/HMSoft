import { z } from "zod";

const Schema = z.object({
  id: z.string(),
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1, "Full name is required")
    .optional(),
  role: z.string().optional().default("user"),
  cnpj: z.string().optional(),
  website: z.string().optional(),
  photo: z.string().optional(),
  birth: z.date().optional(),
  verified: z.boolean().default(false),
});

export const CreateUserSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, "Username needs to be at least 3 letters")
    .max(15, "Username needs to be at max 15 letters")
    .toLowerCase()
    .trim(),
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Email is invalid"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters"),
  passwordConfirm: z
    .string({
      required_error: "Confirm your password",
    })
    .min(1, "Confirm your password")
    .min(8, "Password must be more than 8 characters"),
});

export const UserSchema = Schema.merge(CreateUserSchema);
