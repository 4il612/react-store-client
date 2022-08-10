import jwtDecode from 'jwt-decode'
import { $authHost, $host } from './index'

type TypeBrand = {
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

export const createDevice = async (device: FormData) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId: number, brandId: number, page: number, limit = 2) => {
    if (typeId === 0 && brandId !== 0){
        const {data} = await $host.get('api/device', {
            params: {
                "brandId": brandId,
                "page": page,
                "limit": limit
            }
        })
        return data
    }

    if (brandId === 0 && typeId !== 0){
        const {data} = await $host.get('api/device', {
            params: {
                "typeId": typeId,
                "page": page,
                "limit": limit
            }
        })
        return data
    }

    if ((brandId !== 0) && (typeId !== 0)){
        const {data} = await $host.get('api/device', {
            params: {
                "typeId": typeId,
                "brandId": brandId,
                "page": page,
                "limit": limit
            }
        })
        return data
    }
    
    const {data} = await $host.get('api/device', {
        params:{
            "page": page,
            "limit": limit
        }
    })
    console.log(data.rows);
    
    return data
}

export const fetchOneDevice = async (id: number) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}