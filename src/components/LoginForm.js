import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const data = {
            username: username,
            password: password
        }
        axios.post('http://localhost:3001/login', data)
            .then(res => {
                console.log(res)
                const token = res.data.token;
                onLogin(token);
            })
            .catch(err => console.log(err))
};


return (
    <div>
        <h2>Login</h2>
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
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button onClick={handleLogin}>Login</button>
    </div>
);
}

export default LoginForm;
