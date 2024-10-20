import { useState, useEffect } from 'react';
import { fetchDashboardData } from '../services/dashboardService';

function useFetchDashboardData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadDashboardData() {
            try {
                const result = await fetchDashboardData();
                setData(result);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }

        loadDashboardData();
    }, []);

    return { data, loading, error };
}

export default useFetchDashboardData;