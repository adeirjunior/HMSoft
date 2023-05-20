
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    phone?: Nullable<string>;
    website?: Nullable<string>;
    photo?: Nullable<string>;
    cnpj?: Nullable<string>;
    businessCreated?: Nullable<string>;
}

export interface UpdateUserInput {
    _id?: Nullable<string>;
}

export interface User {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    phone?: Nullable<string>;
    website?: Nullable<string>;
    photo?: Nullable<string>;
    cnpj?: Nullable<string>;
    businessCreated?: Nullable<string>;
}

export interface IQuery {
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(_id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(_id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
