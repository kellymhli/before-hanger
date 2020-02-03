import React from 'react';

const Restaurant = props => {
    return (
        <div className="restaurant-container">
            <br /><h3>Done. You're going to: <br />{props.name}</h3>
            <div class="row">
                <div class="md-col-4 res-details">
                    <img src={props.imgUrl} alt="{props.name}" width="300" height="200" />
                </div>
                <div class="md-col-8 res-details">
                    <a href={props.url} target="_blank">Yelp Link</a>
                    <br />Reviews: {props.reviewCount}
                    <br />Price: {props.price}
                    <br />Rating: {props.rating}
                    <br />{props.lat}, {props.long}
                    <br />Call: {props.phone}
                    <br />{props.displayAddress[0]}
                    <br />{props.displayAddress[1]}
                </div>
            </div>
        </div>
    );
};

export default Restaurant;