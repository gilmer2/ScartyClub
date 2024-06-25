export const saveToLocalStorage = (token: string | [], email: string) => {
	if (Array.isArray(token)) token = ''
	localStorage.setItem('jwt', token)
	localStorage.setItem('email', email)
}


export const getTokenFromLocalStorage = () => localStorage.getItem('jwt')

export const getEmailFromLocalStorage = () => localStorage.getItem('email')
