import { LoginResponse, Logindto } from "../types/auth";
import { post } from "./Instance";

export const logIn = (data: Logindto): Promise<LoginResponse> => post<LoginResponse>('/auth/login', data).then((response) => response.data)