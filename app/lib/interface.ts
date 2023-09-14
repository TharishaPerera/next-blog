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