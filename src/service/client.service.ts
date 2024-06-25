import { client } from "../types/client";
import { get } from "./Instance";

export const clientService = (data?: client) => {
    return get<client[]>('/clientes', { params: data });
}