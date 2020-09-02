import { callAPI } from "./base"

export const login = async (body) => callAPI('/auth/login', 'POST', body)

export const register = async (body) => callAPI('/auth/register', 'POST', body)