import { CreateUserQueryType } from "@/_lib/definitions/user.definitions";
import { prisma } from "@/_lib/utils/prisma";

export const createUserQuery = async ({
  username,
  email,
  password,
}: CreateUserQueryType) =>
  prisma.users.create({ data: { username, email, password } });
