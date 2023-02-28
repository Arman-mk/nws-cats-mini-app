import React from 'react';
import PropTypes from 'prop-types';

const Card = ({title,children, ...rest}) => {
    return (
        <div {...rest}>
            <div className="card-title">{title}</div>
            <div className="card-content">{children}</div>
        </div>
    );
};

Card.propTypes = {
    title:PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children:PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Card;