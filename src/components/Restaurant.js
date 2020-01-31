import React from 'react';

const Restaurant = props => {
    return (
        <div className="restaurant-container">
            Restaurant result
            <p>
                <br />{props.id}
                <br />{props.name}
                <br />{props.imgUrl}
                <br />{props.url}
                <br />{props.reviewCount}
                <br />{props.price}
                <br />{props.rating}
                <br />{props.lat}
                <br />{props.long}
                <br />{props.phone}
                <br />{props.displayAddress[0]}
                <br />{props.displayAddress[1]}
            </p>
        </div>
    );
};

export default Restaurant;