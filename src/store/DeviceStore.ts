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
    private _selectedType: TypeBrand
    private _selectedBrand: TypeBrand
    constructor(){
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {id: 0, name: ""}
        this._selectedBrand = {id: 0, name: ""}
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

    setSelectedType(type: TypeBrand): void{
        this._selectedType = type
    }

    setSelectedBrand(brand: TypeBrand): void{
        this._selectedBrand = brand
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

    get selectedType(): TypeBrand{
        return this._selectedType
    }

    get selectedBrand(): TypeBrand{
        return this._selectedBrand
    }
}