import styles from '../styles/Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Horiab</h1>
      {/* Add navigation links or user authentication status */}
      <nav>
        <Link to="/">Home </Link>
        <Link to="/accountCreationPage">Create Account </Link>
        <Link to="/logInPage">Account </Link>
        <Link to="/videosPage">Videos </Link>
      </nav>
    </header>
  );
};

export default Header;