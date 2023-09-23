import { cookies, headers } from 'next/headers'

const isLogged = () => {
  let token: string | undefined;
  let logged: boolean = false;

  if (cookies().has("token")) {
    token = cookies().get("token")?.value;
  } else if (headers().get("Authorization")?.startsWith("Bearer ")) {
    token = headers().get("Authorization")?.substring(7);
  }

  if (token !== undefined) logged = true;

  return logged;
};

export default isLogged;