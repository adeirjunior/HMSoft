export interface CurrentUser {
  status: string
  data: Data
}

export interface Data {
  user: User
}

export interface User {
  id: string
  email: string
  name: any
  username: string
  cnpj: any
  website: any
  phone: any
  role: string
  photo: string
  verified: boolean
  createdAt: string
  updatedAt: string
}

export interface UserWithPass extends User {
  password: string
}

export interface UserRegisterForm extends UserWithPass {
  agree: boolean
  passwordConfirm: string
}