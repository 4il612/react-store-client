import jwtDecode from 'jwt-decode'
import { $authHost, $host } from './index'

type TypeBrand = {
    id: number
    name: string
}

type Device = {
    id: number
    name: string
    price: number
    rating: number
    img: string
}

export const createType = async (type: TypeBrand) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand: TypeBrand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async (device: Device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async () => {
    const {data} = await $host.get('api/device')
    return data
}

export const fetchOneDevice = async (id: number) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}