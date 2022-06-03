import { Link } from 'react-router-dom';
import profileIcon from '../assets/images/icons/profile.svg';

const Nav = () => (
  <header>
    <Link to="/books">
      Bookstore CMS
    </Link>
    <ul>
      <li><Link to="/books">BOOKS</Link></li>
      <li><Link to="/categories">CATEGORIES</Link></li>
    </ul>
    <Link to="/profile">
      <img src={profileIcon} alt="profile" />
    </Link>
  </header>
);

export default Nav;
