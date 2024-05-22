import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({
        products:[{
            id:1,
            name:'strawberries'
        },
        {
            id:2,
            name:'Apple'
        }],
    })
}