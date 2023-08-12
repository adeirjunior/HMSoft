import connect from "@/utils/db"
import UserModel from '@/models/user.model'
import { UserType } from "@/types/User"

export const addUser = async ({name, username, email, password, enabled}: UserType) => {
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
        await connect()

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
        await connect()

    } catch (error) {
        
    }

}

export const removeUser = async () => {
    try {
        await connect()

    } catch (error) {
        
    }

}