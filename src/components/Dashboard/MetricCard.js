import React from 'react';

function MetricCard({ title, value, icon }) {
    return (
        <div className="metric-card">
            <div className="metric-card-icon">{icon}</div>
            <div className="metric-card-content">
                <h3 className="metric-card-title">{title}</h3>
                <p className="metric-card-value">{value}</p>
            </div>
        </div>
    );
}

export default MetricCard;