import React from 'react';

function RecentActivity({ activities }) {
    const getStatusBadge = (status) => {
        const statusMap = {
            'Creating': 'bg-blue-500',
            'Pending': 'bg-yellow-500',
            'Approved': 'bg-green-500',
            'Failed': 'bg-red-500',
            'Passed': 'bg-green-500'
        };

        return (
            <span className={`status-badge ${statusMap[status] || 'bg-gray-500'}`}>
                {status}
            </span>
        );
    };

    return (
        <div className="recent-activity">
            <h2>Recent Activity</h2>
            <ul>
                {activities.map((activity, index) => (
                    <li key={index} className="activity-item">
                        <span className="activity-type">{activity.type}</span>
                        <span className="activity-description">
                            {getStatusBadge(activity.status)} {activity.description}
                        </span>
                        <span className="activity-time">{activity.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecentActivity;