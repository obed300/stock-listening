import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineArrowBackIos, MdKeyboardVoice } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import styles from '../style/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <a href="/" className="back-button">
      <MdOutlineArrowBackIos className="back-button" />
    </a>
    <h1>NASDAQ</h1>

    <NavLink to="/" activeClassName={styles.activeLink} className={styles.Home}>Home</NavLink>
    <NavLink to="/Details" activeClassName={styles.activeLink} className={styles.Home}>Details</NavLink>
    <MdKeyboardVoice />
    <FiSettings />
  </nav>
);

export default Navbar;
