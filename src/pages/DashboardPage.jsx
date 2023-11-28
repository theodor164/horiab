// DashboardPage.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import UserData from '../components/UserData';
import { useAuth } from '../components/AuthContext';

const DashboardPage = () => {
  const { isAuthenticated, isSubscribed } = useAuth();
  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" />;
  }
  console.log(isSubscribed);
  return (
    <div>
      <Header></Header>
      <h1>Dashboard Page</h1>
      {/* Add content for the dashboard */}
      <UserData></UserData>
    {/* Conditionally render the Stripe buy button if the user is not subscribed */}
    {!isSubscribed && (
        <stripe-buy-button
          buy-button-id="buy_btn_1OHT85JtqR3ifyMox1BwbVSq"
          publishable-key="pk_live_51OHSZJJtqR3ifyMoxZjB2SLvNxAIu8LYfH0eU3mi49U0kI44qkfCLJNlQshyK0OT8KhwvEo36jpXwxp2ayBjxQhG00rENiAOEZ">
        </stripe-buy-button>
      )}
    </div>
  );
};

export default DashboardPage;