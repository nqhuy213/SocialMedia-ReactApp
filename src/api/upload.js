import { callAPI } from "./base"

export const uploadImage = (formData) => callAPI('upload', 'POST', formData, {})