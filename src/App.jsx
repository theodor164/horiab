import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountCreation from './pages/AccountCreation';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Videos from './pages/Videos';
// Import other components and pages

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/accountCreationPage" Component={AccountCreation} />
        <Route path="/logInPage" Component={LogIn} />
        <Route path="/videosPage" Component={Videos} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
