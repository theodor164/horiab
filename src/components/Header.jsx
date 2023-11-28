import styles from '../styles/Header.module.scss';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Header = () => {
  const { isAuthenticated, isSubscribed, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className={styles.header}>
      <h1>Horiab</h1>
      {/* Add navigation links or user authentication status */}
      <nav>
        <Link to="/">Home </Link>
        {!isAuthenticated &&  <Link to="/accountCreationPage">Create Account </Link>}
        <Link to="/logInPage">Account </Link>
        <Link to="/videosPage">Videos </Link>
        <Link to="/dashboard">Dashboard </Link>
        {isAuthenticated && isSubscribed && <Link to="/privateVideos">Private Videos </Link>}
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
};

export default Header;