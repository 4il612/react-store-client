import { makeAutoObservable } from "mobx";

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

export default class DeviceStore{
    private _types: TypeBrand[]
    private _brands: TypeBrand[]
    private _devices: Device[]
    constructor(){
        this._types = [
            {id: 1, name: "смартфоны"},
            {id: 2, name: "наушники"}
        ]
        this._brands = [
            {id: 1, name: "смартфоны"},
            {id: 2, name: "наушники"}
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://the-istore.ru/upload/iblock/7cc/7cc9085373c58a4b89ff51977843aba2.jpg"},
            {id: 2, name: "Iphone 12", price: 15000, rating: 4, img: "https://the-istore.ru/upload/iblock/7cc/7cc9085373c58a4b89ff51977843aba2.jpg"},
        ]
        makeAutoObservable(this)
    }

    setTypes(types: TypeBrand[]): void{
        this._types = types
    }

    setBrands(brands: TypeBrand[]): void{
        this._brands = brands
    }

    setDevices(devices: Device[]): void{
        this._devices = devices
    }

    get types(): TypeBrand[]{
        return this._types
    }

    get brands(): TypeBrand[]{
        return this._brands
    }

    get devices(): Device[]{
        return this._devices
    }
}