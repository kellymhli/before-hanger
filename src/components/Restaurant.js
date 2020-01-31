import React from 'react';

const Restaurant = props => {
    return (
        <div className="restaurant-container">
            Restaurant result
            <p>
                Res:
                {props.resId}
            </p>
        </div>
    );
};

export default Restaurant;