import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import AccountCreation from './pages/AccountCreation';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Videos from './pages/Videos';
import PrivateRoute from './components/PrivateRoute';
import DashboardPage from './pages/DashboardPage'; // Create this component for your protected page
// Import other components and pages

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/accountCreationPage" Component={AccountCreation} />
        <Route path="/logInPage" Component={LogIn} />
        <Route path="/videosPage" Component={Videos} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<DashboardPage />} isAuthenticated={isAuthenticated} />}
        />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
