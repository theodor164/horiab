// AuthContext.js
import { createContext, useContext, useState } from 'react';

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

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

console.log('hello');
export const useAuth = () => {
  return useContext(AuthContext);
};