import { addUser, getUsers } from '@/services/user.service'
import { UserType } from '@/types/User'
import { NextResponse } from 'next/server'

export const GET = async () => {
    try {
        const users: UserType[]  = await getUsers()

        return new NextResponse(JSON.stringify(users), { status: 200 })
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 })
    }
}

export const POST = async (request: Request) => {
    try {
        const data: UserType = request.body as unknown as UserType
        
        const res = new NextResponse(JSON.stringify(data), { status: 200 })
        return res
    } catch (error) {
        return new NextResponse(JSON.stringify(error), { status: 500 })
    }
}