import React from 'react';
import { Server, FileText, Clock } from 'lucide-react';
import MetricCard from '../components/Dashboard/MetricCard';
import QuickAction from '../components/Dashboard/QuickAction';
import RecentActivity from '../components/Dashboard/RecentActivity';
import useFetchDashboardData from '../hooks/useFetchDashboardData';

function Dashboard() {
    const { data, loading, error } = useFetchDashboardData();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="metrics-container">
                {data.metrics.map((metric, index) => (
                    <MetricCard
                        key={index}
                        title={metric.title}
                        value={metric.value}
                        icon={index === 0 ? <Server /> : index === 1 ? <FileText /> : <Clock />}
                    />
                ))}
            </div>
            <div className="quick-actions-container">
                <QuickAction title="Create AMI" link="/amis/create" icon={<Server />} />
                <QuickAction title="View Reports" link="/reports" icon={<FileText />} />
                <QuickAction title="AMI History" link="/amis/history" icon={<Clock />} />
            </div>
            <RecentActivity activities={data.recentActivities} />
        </div>
    );
}

export default Dashboard;