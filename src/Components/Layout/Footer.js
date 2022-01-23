import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../../Assets/dogs-footer.svg';
import Logo from '../../Assets/logo-footer.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={Logo} alt="" />
      <p>Builders Teste Técnico - Luan Dantas | Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;
