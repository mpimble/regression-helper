import { useState } from "react"
import axios from "axios";

import "./LoginPage.css"
import { isAuthenticated } from "./auth";
import { Navigate } from "react-router-dom";

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8000/token",
                new URLSearchParams({
                    username: username,
                    password: password,
                }),
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                });

            localStorage.setItem('accessToken', response.data.access_token);


        }
        catch (err) {
            console.error(err);
        }

    }


    if (isAuthenticated()) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div>
            <h2>Login to Regression Tool</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage