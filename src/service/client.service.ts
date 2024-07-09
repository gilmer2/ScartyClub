import { client, UpdateClient, user } from "../types/client";
import { get, put } from "./Instance";

export const clientService = (data?: client) => {
    return get<client[]>('/clientes', { params: data });
}

export const addPointClient = (id: string, data: UpdateClient) => {
    return put(`/clientes/${id}`, data);
}

export const findOnClient = (email: string, data?: client) => {
    return get<client>(`/clientes/email/${email}`, { params: data });
}

export const userDta = (email:string, data?: user) => {
    return get<user>(`/users/email/${email}`, { params: data });
}