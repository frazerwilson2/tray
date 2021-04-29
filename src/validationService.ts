export const validateLoop = (validations: Array<(value:string)=>boolean>) => {
    return function validate(value:string, i:number = 0):boolean {
        if (i == validations.length) { return true; }
        if (validations[i](value)) {
            return validate(value, i+1);
        }
        return false;
    }
}

export const required = (value:string) => value.length > 0;

export const validEmail = (email:string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const minLen = (value:string) => value.length >= 9;

export const hasNumbers = (value:string) => {
    var regex = /\d/g;
    return regex.test(value);
} 

export const hasLowerCase = (value:string) => {
    return (/[a-z]/.test(value));
}

export const hasUpperCase = (value:string) => {
    return (/[A-Z]/.test(value));
}