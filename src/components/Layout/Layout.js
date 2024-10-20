import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Button from '../shared/Button';

function Layout() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="layout">
            <Header />
            <div className="layout-content">
                <Sidebar />
                <main className="main-content">
                    {user && (
                        <div className="user-info">
                            <span>Welcome, {user.email}</span>
                            <Button onClick={handleLogout}>Logout</Button>
                        </div>
                    )}
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;