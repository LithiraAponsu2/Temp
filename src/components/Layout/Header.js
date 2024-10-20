import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="logo">AMI Creation Portal</div>
            <nav>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/amis">AMIs</Link></li>
                    <li><Link to="/recipes">Chef Recipes</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;