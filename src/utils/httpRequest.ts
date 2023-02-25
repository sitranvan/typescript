import axios from 'axios'
import { apiConfig } from '../config'

export const unsplashRequest = axios.create({
    baseURL: ' https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${apiConfig.accessKey}`,
    },
})
