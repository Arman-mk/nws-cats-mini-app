import React from 'react';
import styles from "../styles/header.module.scss";
import NavMenu from "@src/layout/app/components/NavMenu.jsx";

const Header = props => {
    return (
        <header className={styles["app-header"]}>
            <div className="logo" ><img width={50} src={"https://www.nwslab.com/img/logo.png"} alt="logo"/> </div>
            <NavMenu/>
        </header>
    );
};

Header.propTypes = {

};

export default Header;