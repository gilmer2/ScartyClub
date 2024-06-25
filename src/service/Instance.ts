/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const URL = 'http://localhost:3000/ScaryClub/v1';

const apiService = axios.create({
	baseURL: URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

function get<T> (url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
	return apiService.get(url, config)
}

function post<T> (
	url: string,
	data?: unknown,
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
	return apiService.post(url, data, config)
}

function put<T> (
	url: string,
	data?: unknown,
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
	return apiService.put(url, data, config)
}

function remove<T> (url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
	return apiService.delete(url, config)
}

export { get, post, put, remove }
