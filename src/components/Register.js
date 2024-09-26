// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://your-api-url/register', {
                username,
                email,
                password
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('注册失败，请重试');
        }
    };

    return (
        <div>
            <h2>注册</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>用户名，但第二次提交:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>邮箱:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>密码:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">注册</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
