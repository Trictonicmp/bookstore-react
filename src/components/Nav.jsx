import { Link } from 'react-router-dom';
import profileIcon from '../assets/images/icons/profile.svg';
import styles from '../css/components/navigation.module.css';

const Nav = () => (
  <header className={styles.navbar}>
    <div className={`page-container ${styles.pageContainer}`}>
      <Link to="/" className={styles.logo}>
        Bookstore CMS
      </Link>
      <ul className={styles.linksContainer}>
        <li><Link to="/" className={`${styles.link} ${styles.activeLink}`}>BOOKS</Link></li>
        <li><Link to="/categories" className={styles.link}>CATEGORIES</Link></li>
      </ul>
      <Link to="/profile" className={styles.profileBtn}>
        <img src={profileIcon} alt="profile" />
      </Link>
    </div>
  </header>
);

export default Nav;
