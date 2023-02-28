import React from 'react';
import PropTypes from 'prop-types';
import styles from "../styles/catCard.module.scss"
import Card from "@ui/Card.jsx";

const CatCard = ({url}) => {
    return (
        <Card className={styles["cat-card"]}>
            <img className="f-with" src={url} alt=""/>
        </Card>
    );
};

CatCard.propTypes = {
    url:PropTypes.string,
};

export default CatCard;