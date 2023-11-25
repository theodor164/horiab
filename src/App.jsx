import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import AccountCreation from './pages/AccountCreation';
import Home from './pages/Home';
// Import other components and pages

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/account" Component={AccountCreation} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;