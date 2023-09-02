import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const res = 'Hello World'

    return NextResponse.json(res)
}
