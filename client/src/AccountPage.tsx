import { useState, useEffect } from "react";
import { getEmail, getFullName, getUsername } from "./userinfo";

function AccountPage() {
    const [fullName, setFullName] = useState("");
    useEffect(() => {
        getFullName().then(result => {
            setFullName(result);
        });
    }, []);

    const [email, setEmail] = useState("");
    useEffect(() => {
        getEmail().then(result => {
            setEmail(result);
        });
    }, []);

    const [username, setUsername] = useState("");
    useEffect(() => {
        getUsername().then(result => {
            setUsername(result);
        });
    }, []);

    return (
        <div>
            <h3>Your username: {username}</h3>
            <h3>Your full name: {fullName}</h3>
            <h3>Your email address: {email}</h3>
        </div>
    )
}

export default AccountPage