import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link
          className={styles.logo}
          to="/"
          aria-label="Builders Teste Técnico - Home"
        >
          <img src={Logo} alt="" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
