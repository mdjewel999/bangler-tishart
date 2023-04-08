import React, { Children } from 'react';

const Cousin = ({Children}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{Children}</small></p>
        </div>
    );
};

export default Cousin;