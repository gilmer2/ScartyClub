import { Premios, UpdatePremios } from "../types/premios";
import { get, put } from "./Instance";

export const getPremios = (data?: Premios) => {
    return get<Premios[]>('/premios', { params: data })
}

export const updatePremios = (id: string, data: UpdatePremios) => {
    return put(`/premios/${id}`, data)
}