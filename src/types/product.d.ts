export interface Product {
    _id: string
    name: string
    price: number
    description: string
    image: string
    category: string
    stock: number
    status: boolean
    market: string
}


export interface UpdateProduct {
    name?: string
    price?: number
    description?: string
    image?: string
    category?: string
    stock?: number
    status?: boolean
    market?: string
}