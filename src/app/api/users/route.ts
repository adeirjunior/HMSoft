import { addUser, getUsers } from '@/services/user.service'
import { UserType } from '@/types/User'
import { NextResponse, NextRequest } from 'next/server'

export const GET = async () => {
    try {
        const users: UserType[]  = await getUsers()

        return new NextResponse(JSON.stringify(users), { status: 200 })
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 })
    }
}

export const POST = async (request: NextRequest) => {
    try {
        const data: UserType = await request.json()
        console.log(data)
        await addUser(data)
        return new NextResponse(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new NextResponse(JSON.stringify(error), { status: 500 })
    }
}