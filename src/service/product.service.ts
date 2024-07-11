import { Product, UpdateProduct } from "../types/product"
import { get, put } from "./Instance"

export const getProduct = (data?: Product) => {
    return get<Product[]>('/product', { params: data })
}

export const updateProduct = (id: string, data: UpdateProduct) => {
    return put(`/product/${id}`, data)
}