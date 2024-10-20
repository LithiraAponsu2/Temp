import React from 'react';
import { render, act } from '@testing-library/react';
import { AuthProvider, useAuth } from '../../contexts/AuthContext';

const TestComponent = () => {
    const { user, login, logout, signup } = useAuth();
    return (
        <div>
            <div data-testid="user">{user ? JSON.stringify(user) : 'No user'}</div>
            <button onClick={() => login({ email: 'test@example.com' })}>Login</button>
            <button onClick={() => logout()}>Logout</button>
            <button onClick={() => signup({ email: 'newuser@example.com' })}>Signup</button>
        </div>
    );
};

test('AuthProvider provides authentication context', () => {
    const { getByTestId, getByText } = render(
        <AuthProvider>
            <TestComponent />
        </AuthProvider>
    );

    expect(getByTestId('user')).toHaveTextContent('No user');

    act(() => {
        getByText('Login').click();
    });

    expect(getByTestId('user')).toHaveTextContent('test@example.com');

    act(() => {
        getByText('Logout').click();
    });

    expect(getByTestId('user')).toHaveTextContent('No user');

    act(() => {
        getByText('Signup').click();
    });

    expect(getByTestId('user')).toHaveTextContent('newuser@example.com');
});