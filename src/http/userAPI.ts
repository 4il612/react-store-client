import { AxiosResponse } from 'axios'
import jwtDecode from 'jwt-decode'
import { $authHost, $host } from './index'

export const registration = async (email: string, password: string) => {
    const {data} = await $host.post('api/user/register', {email, password, role: 'ADMIN'})
    return jwtDecode(data.token)
}

export const login = async (email: string, password: string) => {
    const {data} = await $host.post('api/user/login', {email, password})
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $host.post('api/user/register')
    return jwtDecode(data.token)
}