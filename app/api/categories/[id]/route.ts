import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

// Get category by id
export const GET = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.url.split("categories/")[1]);

        const category = await prisma.category.findFirst({
            where: {
                id: id,
            }
        })
        
        return NextResponse.json({ category }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ path: 'GET_CATEGORY_BY_ID', error: error }, { status: 500 })
    }
}

// Update category
export const PUT = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.url.split("categories/")[1]);
        const { name } = await req.json()

        const category = await prisma.category.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            }
        })

        return NextResponse.json({ category }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ path: 'UPDATE_CATEGORY', error: error }, { status: 500 })
    }
}

// Delete category
export const DELETE = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.url.split("categories/")[1]);

        const category = await prisma.category.delete({
            where: {
                id: id,
            }
        })

        return NextResponse.json({ category }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ path: 'DELETE_CATEGORY', error: error }, { status: 500 })
    }
}