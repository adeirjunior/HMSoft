export type User = {
  id: string;
  email: string;
  username: string;
  password: string;
  name?: string | null;
  cnpj?: string | null;
  website?: string | null;
  phone?: string | null;
  birth?: Date | null;
  role?: string | null;
  photo?: string | null;
  verified?: boolean | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};

export type UserState = {
  errors?: {
    username?: string[];
    email?: string[];
    password?: string[];
    passwordConfirm?: string[];
  };
  message?: string | null;
};

export type CreateUserQueryType = {
  username: string;
  email: string;
  password: string;
};
