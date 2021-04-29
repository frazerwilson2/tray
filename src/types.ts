import { ReactComponentElement } from "react";

export type storeKeys = 'name' | 'role' | 'email' | 'password' | 'receiveUpdates' | 'receiveOtherUpdates';

export type PageProps = {
    children:any, nextStep?:string, lastPage?: boolean
}

export type MenuProps = { config:Array<{title:string, component: any}>, active?:string }

export type InputTypes = {
    value:storeKeys, setValid?:any, changeAction:any, submitted?:boolean, validation?:Array<(value:string)=>boolean>, validationLabel?:string
}

export type ChecboxInputTypes = {
    value:storeKeys, changeAction:any, label:string
}