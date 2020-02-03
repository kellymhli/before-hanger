import React from 'react';

const Restaurant = props => {
    return (
        <div className="restaurant-container">
            <h3>Done. You're going to: <br /><br />{props.name}</h3>
            <div>
                <img src={props.imgUrl} alt="{props.name}" width="500" height="350" />
                <br /><a href={props.url} target="_blank">Yelp Link</a>
                <br />Reviews: {props.reviewCount}
                <br />Price: {props.price}
                <br />Rating: {props.rating}
                <br />{props.lat}
                <br />{props.long}
                <br />Call: {props.phone}
                <br />{props.displayAddress[0]}
                <br />{props.displayAddress[1]}
            </div>
        </div>
    );
};

export default Restaurant;