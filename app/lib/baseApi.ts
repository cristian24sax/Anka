import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_ADMIN_URL

export const baseApi = axios.create({
    baseURL,
})