import { addUser, getUsers } from '@/services/user.service'
import { UserType } from '@/types/User'
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

export const GET = async () => {
    try {
        const users = await getUsers()

        return new NextResponse(users, { status: 200 })
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 })
    }
}

export const POST = async (request: Request) => {
    try {
        const data: UserType = request.body
        
        const res = new NextResponse(data, { status: 200 })
        return res
    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}