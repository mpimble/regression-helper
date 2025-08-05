import { jwtDecode } from "jwt-decode";

interface TokenData {
    sub: string;
    exp: number;
    [key: string] : any;
}

export function isAuthenticated(): boolean {
    const token = localStorage.getItem("accessToken");
    if (!token) {
        return false;
    }
    const decoded: TokenData = jwtDecode(token);
    
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp > currentTime;

}