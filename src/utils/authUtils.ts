export const saveToLocalStorage = (token: string | [], email: string) => {
	if (Array.isArray(token)) token = ''
	localStorage.setItem('jwt', token)
	localStorage.setItem('email', email)
	saveStateSesion(false)
	const storageEvent = new Event('storageUpdate')
    window.dispatchEvent(storageEvent)
}

export const saveStateSesion = (state: boolean) => {
	localStorage.setItem('state', state.toString())
}

export const getStateSesion = () => localStorage.getItem('state')

export const getTokenFromLocalStorage = () => localStorage.getItem('jwt')

export const getEmailFromLocalStorage = () => localStorage.getItem('email')


export const removeTokenFromLocalStorage = () => {
	localStorage.removeItem('jwt')
	localStorage.removeItem('email')
	localStorage.removeItem('id')
	saveStateSesion(false)
	const storageEvent = new Event('storageUpdate')
    window.dispatchEvent(storageEvent)
}