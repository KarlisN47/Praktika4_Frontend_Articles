// Frontend for User Authentication, Articles, and Comments

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [user, setUser] = useState(null);
    const [articles, setArticles] = useState([]);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            setUser(response.data.user);
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div>
            <h1>Article Management</h1>
            {user ? <h2>Welcome, {user.email}</h2> : <AuthForms onLogin={login} />}
        </div>
    );
}

function AuthForms({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => onLogin(email, password)}>Login</button>
        </div>
    );
}

export default App;