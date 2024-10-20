import React from 'react';
import SignupForm from '../components/Auth/SignupForm';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className="auth-page">
            <SignupForm />
            <p>
                Already have an account? <Link to="/login">Log in</Link>
            </p>
        </div>
    );
}

export default Signup;