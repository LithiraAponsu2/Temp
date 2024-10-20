import React from 'react';
import { render, screen } from '@testing-library/react';
import MetricCard from '../../../components/Dashboard/MetricCard';

test('renders MetricCard with correct content', () => {
    const title = 'Total AMIs';
    const value = 150;
    const icon = <svg data-testid="test-icon" />;

    render(<MetricCard title={title} value={value} icon={icon} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(value.toString())).toBeInTheDocument();
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
});