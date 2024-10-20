import React from 'react';

function Card({ children, title, className = '' }) {
    return (
        <div className={`card ${className}`}>
            {title && <h2 className="card-title">{title}</h2>}
            <div className="card-content">
                {children}
            </div>
        </div>
    );
}

export default Card;