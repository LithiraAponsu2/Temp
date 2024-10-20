import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';

function AMICreation() {
    const [name, setName] = useState('');
    const [vmId, setVmId] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !vmId) {
            setError('Please fill in all fields');
            return;
        }
        // Here you would typically make an API call to start the AMI creation process
        console.log('Creating AMI:', { name, vmId });
        // For now, we'll just navigate to a dummy status page
        navigate(`/amis/status/${name}`);
    };

    return (
        <div className="ami-creation">
            <h1>Create New AMI</h1>
            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <Input
                    type="text"
                    placeholder="AMI Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="VM ID"
                    value={vmId}
                    onChange={(e) => setVmId(e.target.value)}
                />
                <Button type="submit">Start AMI Creation</Button>
            </form>
        </div>
    );
}

export default AMICreation;