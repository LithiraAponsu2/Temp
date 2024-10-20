import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/users">User Management</Link></li>
                    <li><Link to="/amis">AMI Management</Link></li>
                    <li><Link to="/recipes">Chef Recipes</Link></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;