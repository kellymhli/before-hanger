import React from 'react';

const Restaurant = props => {
    return (
        <div className="restaurant-container">
            Restaurant result
            <p>
                Res:
                { props.restaurants }
            </p>
        </div>
    );
};

export default Restaurant;