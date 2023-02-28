import React from 'react';
import PropTypes from 'prop-types';

const Content = ({children}) => {
    return (
        <main className="main-content">
            {children}
        </main>
    );
};

Content.propTypes = {
    children:PropTypes.node
};

export default Content;