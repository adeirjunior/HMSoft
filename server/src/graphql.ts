
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateHotelInput {
    exampleField?: Nullable<number>;
}

export interface UpdateHotelInput {
    _id: string;
}

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

export interface Hotel {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    photo?: Nullable<string>;
}

export interface IQuery {
    hotels(): Nullable<Hotel>[] | Promise<Nullable<Hotel>[]>;
    hotel(_id: string): Nullable<Hotel> | Promise<Nullable<Hotel>>;
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(_id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createHotel(createHotelInput: CreateHotelInput): Hotel | Promise<Hotel>;
    updateHotel(updateHotelInput: UpdateHotelInput): Hotel | Promise<Hotel>;
    removeHotel(_id: string): Nullable<Hotel> | Promise<Nullable<Hotel>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(_id: string): Nullable<User> | Promise<Nullable<User>>;
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

type Nullable<T> = T | null;
