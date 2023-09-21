import { getErrorResponse } from "@/lib/helpers";
import { prisma } from "@/lib/prisma";
import {
  RegisterUserInput,
  RegisterUserSchema,
} from "@/lib/validations/user.schema";
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as RegisterUserInput;
    const data = RegisterUserSchema.parse(body);

    const hashedPassword = await hash(data.password, 12);

    const user = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
        photo: data.photo,
      },
    });

    // Remova a senha do objeto do usuário antes de enviar a resposta
    const userWithoutPassword = { ...user, password: undefined };

    return new NextResponse(
      JSON.stringify({
        status: "success",
        data: { user: userWithoutPassword },
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    if (error instanceof ZodError) {
      // Adicione um log para depuração
      console.error("Erro de validação:", error);

      return getErrorResponse(400, "Falha nas validações", error);
    }

    if (error.code === "P2002") {
      // Adicione um log para depuração
      console.error("Erro de conflito de e-mail:", error);

      return getErrorResponse(409, "Usuário com este email já existe");
    }

    // Adicione um log para depuração
    console.error("Erro interno:", error);

    return getErrorResponse(500, "Erro interno do servidor");
  }
}
