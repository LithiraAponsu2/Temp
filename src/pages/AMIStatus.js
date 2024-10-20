import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/shared/Button';

function AMIStatus() {
    const { amiName } = useParams();
    const [status, setStatus] = useState('Creating');
    const [report, setReport] = useState(null);

    useEffect(() => {
        // In a real app, you would fetch the status and report from your API
        const timer = setTimeout(() => {
            setStatus('Report Generated');
            setReport('This is a sample report for ' + amiName);
        }, 5000);

        return () => clearTimeout(timer);
    }, [amiName]);

    const handleApprovalSubmit = () => {
        // In a real app, you would submit this to your API
        console.log('Submitting for approval:', amiName);
        setStatus('Pending Approval');
    };

    return (
        <div className="ami-status">
            <h1>AMI Status: {amiName}</h1>
            <p>Current Status: {status}</p>
            {report && (
                <div className="report">
                    <h2>Generated Report</h2>
                    <pre>{report}</pre>
                </div>
            )}
            {status === 'Report Generated' && (
                <Button onClick={handleApprovalSubmit}>Submit for Approval</Button>
            )}
        </div>
    );
}

export default AMIStatus;