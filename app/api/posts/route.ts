import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

// Get all posts
export const GET = async (req: Request, res: Response) => {
    try {
        const posts = await prisma.post.findMany({
            include: {
                categories: true
            }
        })

        return NextResponse.json({ posts }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ path: 'GET_ALL_POSTS', error: error }, { status: 500 })
    }
}

// Create new post
export const POST = async (req: Request, res: Response) => {
    try {
        const { title, overview, slug, read, content } = await req.json()

        const post = await prisma.post.create({
            data: {
                title: title,
                overview: overview,
                slug: slug,
                read: read,
                content: content
            }
        })

        return NextResponse.json({ post }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ path: 'CREATE_NEW_POST', error: error }, { status: 500 })
    }
}