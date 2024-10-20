import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

test('renders layout components', () => {
    render(
        <Router>
            <Layout>
                <div>Test Content</div>
            </Layout>
        </Router>
    );

    expect(screen.getByText('AMI Creation Portal')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('User Management')).toBeInTheDocument();
    expect(screen.getByText('AMI Management')).toBeInTheDocument();
    expect(screen.getByText('Chef Recipes')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByText(/© 2024 AMI Creation Portal/)).toBeInTheDocument();
});