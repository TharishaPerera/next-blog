import { Prisma, PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

// Get all categories
export const GET = async (req: Request, res: Response) => {
    try {
        const categories = await prisma.category.findMany()

        return NextResponse.json({ categories }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ path: 'GET_ALL_CATEGORIES', error: error }, { status: 500 })
    }
}

// Create new category
export const POST = async (req: Request, res: Response) => {
    try {
        const { name } = await req.json()

        const category = await prisma.category.create({
            data: {
                name: name
            }
        })
        
        return NextResponse.json({ category }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ path: 'CREATE_NEW_CATEGORY', error: error }, { status: 500 })
    }
}