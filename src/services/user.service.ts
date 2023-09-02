import UserModel from '@/models/user.model'
import { UserType } from "@/types/User"
import connect from "@/lib/mongo"

export const addUser = async ({ name, username, email, password }: UserType) => {
    try {
        await connect()
        const newUser = new UserModel({
            name,
            username,
            email,
            password,
            enabled: true
        })
        await newUser.save().then((res: UserType) => console.log(res))
    } catch (error: any) {
        throw new Error(error);
    }
    
}

export const getUser = async () => {
    try {

    } catch (error) {
        
    }

}

export const getUsers: () => Promise<UserType[]>  = async () => {
    try {
        await connect()
        const users: UserType[] = await UserModel.find()
        return users
    } catch (error) {
        return []
    }

}

export const updateUser = async () => {
    try {

    } catch (error) {
        
    }

}

export const removeUser = async () => {
    try {

    } catch (error) {
        
    }

}