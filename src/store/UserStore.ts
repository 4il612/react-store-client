import { makeAutoObservable } from "mobx";

type User = {
    id: number
    email: string
    password: string
    role: string
}

export default class UserStore{
    private _isAuth: boolean;
    private _user: User;
    constructor(){
        this._isAuth = false //_ - unchangeble
        this._user = {id: 1, email: "sas", password: "pasw", role: "ADMIN"}
        makeAutoObservable(this)
    }

    setIsAuth(bool: boolean): void{
        this._isAuth = bool;
    }
    setUser(user: any): void{
        this._user = user
    }

    get isAuth(): boolean{
        return this._isAuth
    }

    get user(){
        return this._user
    }
}