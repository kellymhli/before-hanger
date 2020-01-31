import React from 'react';

const Restaurant = props => {
    return (
        <div className="restaurant-container">
            <h1>You're going here: </h1>
            <div>
                <br />{props.id}
                <br /><h2>{props.name}</h2>
                <br /><img src={props.imgUrl} alt="{props.name}" width="300" height="200" />
                <br /><a href={props.url}>Yelp Link</a>
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