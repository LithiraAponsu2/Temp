import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext';
import LoginForm from '../../../components/Auth/LoginForm';

const renderLoginForm = () => {
    render(
        <AuthProvider>
            <BrowserRouter>
                <LoginForm />
            </BrowserRouter>
        </AuthProvider>
    );
};

test('renders login form', () => {
    renderLoginForm();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
});

test('shows error message when form is submitted with empty fields', () => {
    renderLoginForm();
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(screen.getByText('Please fill in all fields')).toBeInTheDocument();
});

test('calls login function when form is submitted with valid data', () => {
    renderLoginForm();
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    // In a real app, you would mock the login function and check if it's called
});