// UserData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const UserData = () => {
  const { isAuthenticated, username } = useAuth(); // Access the username from AuthContext
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        
        // Make a request to your backend API to retrieve user data
        const response = await axios.get(`http://localhost:3001/api/userdata?username=${username}`);

        // Assuming the API returns user data in the response.data field
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error.response ? error.response.data : error.message);
      }
    };

    if (isAuthenticated) {
      fetchUserData();
    }
  }, [isAuthenticated, username]); // Include username in the dependency array

  // Display user information if authenticated
  return isAuthenticated ? (
    <div>
      <h2>User Information</h2>
      {userData ? (
        <>
          <p>User: {userData.username}</p>
          {/* Display other user data fields as needed */}
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  ) : null;
};

export default UserData;