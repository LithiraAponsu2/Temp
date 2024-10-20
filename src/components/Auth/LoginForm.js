import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import Input from '../shared/Input';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        login({ email });
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button>
        </form>
    );
}

export default LoginForm;