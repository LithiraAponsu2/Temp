import React from 'react';
import { Link } from 'react-router-dom';

function QuickAction({ title, link, icon }) {
    return (
        <Link to={link} className="quick-action">
            <div className="quick-action-icon">{icon}</div>
            <span className="quick-action-title">{title}</span>
        </Link>
    );
}

export default QuickAction;