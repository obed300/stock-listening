import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineArrowBackIos, MdKeyboardVoice } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import styles from '../style/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <MdOutlineArrowBackIos />
    <form>
      <input type="search" id="search" name="search" placeholder="Search..." />
    </form>

    <NavLink to="/" activeClassName={styles.activeLink} className={styles.Home}>Home</NavLink>
    <NavLink to="/Details" activeClassName={styles.activeLink} className={styles.Home}>Details</NavLink>
    <MdKeyboardVoice />
    <FiSettings />
  </nav>
);

export default Navbar;
