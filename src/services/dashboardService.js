export async function fetchDashboardData() {
    // This is a mock service. In a real application, this would make API calls to your backend.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                metrics: [
                    { title: 'Total AMIs', value: 150 },
                    { title: 'Pending Approvals', value: 5 },
                    { title: 'Approved AMIs', value: 120 },
                ],
                recentActivities: [
                    { type: 'AMI Creation', status: 'Creating', description: 'web-server-v1.2.3', time: '2 hours ago' },
                    { type: 'Report Generated', status: 'Pending', description: 'app-server-v2.0.1', time: '3 hours ago' },
                    { type: 'Approval', status: 'Approved', description: 'db-server-v1.1.0', time: '5 hours ago' },
                    { type: 'AMI Creation', status: 'Failed', description: 'cache-server-v1.0.2', time: '1 day ago' },
                    { type: 'Cyber Review', status: 'Passed', description: 'load-balancer-v2.1.1', time: '2 days ago' },
                ],
            });
        }, 1000); // Simulate a 1-second delay
    });
}