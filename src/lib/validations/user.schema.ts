import { z } from "zod";

export const RegisterUserSchema = z
  .object({
    username: z
      .string({
        required_error: "Name is required",
      })
      .min(1, "Full name is required"),
    email: z
      .string({ 
        required_error: "Email is required",
      })
      .min(1, "Email is required")
      .email("Email is invalid"),
    photo: z.string().optional(),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    passwordConfirm: z
      .string({
        required_error: "Confirm your password",
      })
      .min(1, "Confirm your password"),
    agree: z
      .boolean({
        required_error: "You need to agree with our terms and conditions"
      })
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

export const LoginUserSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(1, "Username is required")
    .min(3, "username needs to be at least 3 characters"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export type LoginUserInput = z.infer<typeof LoginUserSchema>;
export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;
