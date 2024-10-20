import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import AMICreation from './pages/AMICreation';
import AMIStatus from './pages/AMIStatus';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/amis/create" element={<AMICreation />} />
              <Route path="/amis/status/:amiName" element={<AMIStatus />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;