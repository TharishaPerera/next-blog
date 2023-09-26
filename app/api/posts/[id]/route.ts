import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Get post by slug
export const GET = async (req: Request, res: Response) => {
  try {
    const slug = req.url.split("posts/")[1];

    const post = await prisma.post.findFirst({
      where: {
        slug: slug,
      },
      include: {
        categories: true,
      },
    });

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { path: "GET_POST_BY_SLUG", error: error },
      { status: 500 }
    );
  }
};

// Update post
export const PUT = async (req: Request, res: Response) => {
  try {
    const postSlug = req.url.split("posts/")[1];
    const { title, overview, slug, read, content } = await req.json();

    const post = await prisma.post.update({
      where: {
        slug: postSlug,
      },
      data: {
        title: title,
        overview: overview,
        slug: slug,
        read: read,
        content: content,
      },
    });

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { path: "UPDATE_POST_BY_SLUG", error: error },
      { status: 500 }
    );
  }
};

// Delete post
export const DELETE = async (req: Request, res: Response) => {
  try {
    const slug = req.url.split("posts/")[1];

    const post = await prisma.post.delete({
      where: {
        slug: slug,
      },
    });

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { path: "DELETE_POST_BY_SLUG", error: error },
      { status: 500 }
    );
  }
};
