// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(''); // Set the initial value to an empty string or the default username
  const [isSubscribed, setIsSubscribed] = useState(false);

  const login = (username) => {
    setIsAuthenticated(true);
    setUsername(username); // Set the actual username when the user logs in
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername(''); // Reset the username when the user logs out
  };

  const subscribe = () => {
    // Set isSubscribed to true when the user subscribes
    setIsSubscribed(true);
  };

  const unsubscribe = () => {
    // Set isSubscribed to false when the user unsubscribes
    setIsSubscribed(false);
  };

  useEffect(() => {
    // Fetch user data on authentication to get subscription status
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/userdata?username=${username}`);
        setIsSubscribed(response.data.subscription.status);
      } catch (error) {
        console.error('Error fetching user data:', error.response ? error.response.data : error.message);
      }
    };

    if (isAuthenticated && username) {
      fetchUserData();
    }
  }, [isAuthenticated, username]);
  return (
    <AuthContext.Provider value={{ isAuthenticated, username, isSubscribed, login, logout, subscribe, unsubscribe }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};