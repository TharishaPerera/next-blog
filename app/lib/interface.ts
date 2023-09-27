export interface Post {
    title: string
    overview: string
    content: any
    _id: string
    slug: {
        current: string
    }
    read: string
    _createdAt: string
}

export interface Category {
    id: number,
    name: string
}

export interface BreadcrumbData {
    title: string
}