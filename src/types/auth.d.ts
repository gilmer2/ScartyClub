export type Logindto = {
    email: string;
    password: string;
}

export interface LoginResponse {
	success: boolean
	error: number
	title: string
	message: string
	data: string | []
}