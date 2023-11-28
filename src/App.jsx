// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import AccountCreation from './pages/AccountCreation';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Videos from './pages/Videos';
import PrivateRoute from './components/PrivateRoute';
import DashboardPage from './pages/DashboardPage'; // Create this component for your protected page
import PrivateVideos from './pages/PrivateVideos'
import { AuthProvider } from './components/AuthContext';
// Import other components and pages

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <Router>
        <AuthProvider>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/accountCreationPage" Component={AccountCreation} />
          <Route path="/logInPage" Component={LogIn} />
          <Route path="/videosPage" Component={Videos} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<DashboardPage />} />}
          />
          {/* Add routes for other pages */}
          <Route path='/privateVideos' Component={PrivateVideos}></Route>
        </Routes>
    </AuthProvider>
      </Router>
  );
};

export default App;
