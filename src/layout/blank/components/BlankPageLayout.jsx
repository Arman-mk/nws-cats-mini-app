import React from 'react';
import PropTypes from "prop-types";
import {Outlet} from "react-router-dom";
import styles from "@src/layout/blank/styles/blankLayout.module.scss";


const BlankPageLayout = () => {
    return (
        <div className={styles["blank-page"]}>
            <Outlet/>
        </div>
    );
};

BlankPageLayout.propTypes = {
};

export default BlankPageLayout;