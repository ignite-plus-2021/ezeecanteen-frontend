import React from 'react';

const MenuElement = (image, foodname, price, votes) => {

    var Rating = require('react-rating');
    return (
        <div className="MenuContainer">
            <div className="imageContainer">
                <img src={image} alt="food" />
            </div>
            <div className="FoodDetailsContainer">
                {foodname}
                {price}
                <Rating className="StarRating" start="0" stop="5" />{votes}
            </div>
            <div className="AddButton">

            </div>
            Menu
        </div>
    )
}
export default MenuElement;