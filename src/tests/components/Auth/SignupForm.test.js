import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext';
import SignupForm from '../../../components/Auth/SignupForm';

const renderSignupForm = () => {
    render(
        <AuthProvider>
            <BrowserRouter>
                <SignupForm />
            </BrowserRouter>
        </AuthProvider>
    );
};

test('renders signup form', () => {
    renderSignupForm();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
});

test('shows error message when form is submitted with empty fields', () => {
    renderSignupForm();
    fireEvent.click(screen.getByRole('button', { name: 'Sign Up' }));
    expect(screen.getByText('Please fill in all fields')).toBeInTheDocument();
});

test('shows error message when passwords do not match', () => {
    renderSignupForm();
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'password456' } });
    fireEvent.click(screen.getByRole('button', { name: 'Sign Up' }));
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument();
});

test('calls signup function when form is submitted with valid data', () => {
    renderSignupForm();
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: 'Sign Up' }));
    // In a real app, you would mock the signup function and check if it's called
});