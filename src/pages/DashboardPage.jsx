// DashboardPage.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import UserData from '../components/UserData';
import { useAuth } from '../components/AuthContext';

const DashboardPage = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Header></Header>
      <h1>Dashboard Page</h1>
      {/* Add content for the dashboard */}
      <UserData></UserData>
    </div>
  );
};

export default DashboardPage;