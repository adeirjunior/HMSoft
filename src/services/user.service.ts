import connect from "@/utils/db"
import UserModel from '@/models/user.model'
import { UserType } from "@/types/User"

export const addUser = async ({name, username, email, password, enabled}: UserType) => {
    try {
        await connect()
        const newUser = UserModel({
            name,
            username,
            email,
            password,
            enabled: true
        })

        await newUser.save().then(res => console.log(res))
    } catch (error) {
        throw new Error(error);
    }
    
}

export const getUser = async () => {
    try {
        await connect()

    } catch (error) {
        
    }

}

export const getUsers = async () => {
    try {
        await connect()
        const users = await UserModel.find()
        return users
    } catch (error) {
        
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