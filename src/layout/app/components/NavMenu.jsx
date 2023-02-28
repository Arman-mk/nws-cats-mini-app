import React from 'react';
import PropTypes from 'prop-types';
import {APP_NAVBAR_MENU} from "../../configs.js";
import {NavLink} from "react-router-dom";
import styles from "../styles/header.module.scss";


const NavMenu = props => {
    return (
        <ul className={styles["nav-menu"]}>
            {APP_NAVBAR_MENU.map(item => <li key={item.key}><NavLink to={item.href}>{item.title}</NavLink></li>)}
        </ul>
    );
};

NavMenu.propTypes = {

};

export default NavMenu;