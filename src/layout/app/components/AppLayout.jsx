import React from 'react';
import Header from "./Header.jsx";
import PropTypes from "prop-types";
import {Navigate, Outlet} from "react-router-dom";
import "../styles/appLayout.module.scss";
import Sidebar from "./Sidebar.jsx";
import Content from "@src/layout/app/components/Content.jsx";
import styles from "../styles/appLayout.module.scss"

const AppLayout = () => {


    return (
        <div className={styles["app-layout"]}>
            <Header/>
            <Content>
                <Sidebar/>
                <div className="site-layout-content">
                    <Outlet/>
                </div>
            </Content>
            <footer className="mt-3" style={{textAlign: 'center'}}>NWS lab ©2023 Created by Arman</footer>
        </div>
    );
};

AppLayout.propTypes = {
    hideBreadcrumb:PropTypes.bool,
    authIsRequired:PropTypes.bool,
};

export default AppLayout;