import { Link } from 'react-router-dom';
import profileIcon from '../assets/images/icons/profile.svg';

const Nav = () => (
  <header className="navbar">
    <div className="page-container">
      <Link to="/books" className="navbar-logo">
        Bookstore CMS
      </Link>
      <ul className="navbar-links">
        <li><Link to="/books" className="active">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
      <Link to="/profile" className="navbar-profile-btn">
        <img src={profileIcon} alt="profile" />
      </Link>
    </div>
  </header>
);

export default Nav;
