import axios from "axios";
import type { UserData } from "./dataifs";

async function getWholeUser(): Promise<UserData | null> {
    const token = localStorage.getItem("accessToken");

    if (!token) {
        return null;
    }
    
    try {
        const response = await axios.get("http://localhost:8000/users/me/", {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        
        const user_prof: UserData = response.data;
        return user_prof;
    }
      catch(error) {
        console.error("Error fetching user data:", error);
        return null;
      };
}

export async function getUsername(): Promise<string> {
    const user = await getWholeUser();
    if (!user) {
        return '';
    }
    return user.username;

}

export async function getFullName(): Promise<string> {
    const user = await getWholeUser();
    if (!user) {
        return '';
    }
    return user.full_name;

}

export async function getEmail(): Promise<string> {
    const user = await getWholeUser();
    if (!user) {
        return '';
    }
    return user.email;

}