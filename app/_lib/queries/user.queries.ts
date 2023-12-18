import { CreateUserQueryType } from "@/lib/definitions/user.definitions";
import { prisma } from "../utils/prisma";

export const createUserQuery = async ({
  username,
  email,
  password,
}: CreateUserQueryType) =>
  prisma.users.create({ data: { username, email, password } });
