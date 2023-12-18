import { noStore } from ".";
import { User } from "../definitions/user.definitions";
import { prisma } from "../utils/prisma";

export async function getUser(email: string) {
  noStore();
  try {
    const user: User | null = await prisma.users.findUnique({
      where: { email },
    });

    if (!user)
      return {
        message: "No user with this email",
      };

    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
