export interface TokenData {
    sub: string;
    exp: number;
    [key: string] : any;
}

export interface UserData {
    username: string;
    email: string;
    full_name: string;
    disabled: boolean;
}