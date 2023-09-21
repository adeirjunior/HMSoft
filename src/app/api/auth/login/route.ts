import { getEnvVariable, getErrorResponse } from "@/lib/helpers";
import { prisma } from "@/lib/prisma";
import { signJWT } from "@/lib/token";
import { LoginUserInput, LoginUserSchema } from "@/lib/validations/user.schema";
import { compare } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LoginUserInput;
    const data = LoginUserSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: { username: data.username },
    });

    if (!user || !(await compare(data.password, user.password))) {
      console.error("Authentication failed: Invalid username or password");
      return getErrorResponse(401, "Invalid username or password");
    }

    const JWT_EXPIRES_IN = getEnvVariable("JWT_EXPIRES_IN");

    const token = await signJWT(
      { sub: user.id },
      { exp: `${JWT_EXPIRES_IN}d` }
    );

    const tokenMaxAge = parseInt(JWT_EXPIRES_IN) * 60;
    const cookieOptions = {
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV !== "development",
      maxAge: tokenMaxAge,
    };

    const response = new NextResponse(
      JSON.stringify({
        status: "success",
        token,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );

    await Promise.all([
      response.cookies.set(cookieOptions),
      response.cookies.set({
        name: "logged-in",
        value: "true",
        maxAge: tokenMaxAge,
      }),
    ]);

    console.log("Authentication succeeded: User logged in");
    return response;
  } catch (error: any) {
    console.error("Error occurred:", error);

    if (error instanceof ZodError) {
      console.error("Validation error:", error);
      return getErrorResponse(400, "Failed validations", error);
    }

    console.error("Internal server error:", error.message);
    return getErrorResponse(500, error.message);
  }
}
