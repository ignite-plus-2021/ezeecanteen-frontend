import React from 'react';
import StarRatings from 'react-star-ratings';
import '../css/Card.css';
import Image from './Image';
const Card = ({ id, image, price, names, rating, votes, handleQuery }) => {
    const availableItems = [
        {
            id: { id },
            name: { names },
            quantity: 0,
            total: 0,
            price: { price }
        }
    ];
    const [item, setitem] = React.useState(availableItems);
    //On clicking the add button, items are added to the cart
    const onInputChange = (e) => {
        const currentItems = [...item];
        currentItems[e].quantity += 1;
        currentItems[e].total += currentItems[e].price.price;
        setitem(currentItems);
        handleQuery(currentItems[e].id.id, currentItems[e].name.names, currentItems[e].quantity, currentItems[e].total, currentItems[e].price.price, 'p');
    }
    //On clicking the minus button, items are removed from the cart
    const decreaseQuantity = index => {
        const currentItems = [...item];
        if (currentItems[index].quantity > 0) {
            currentItems[index].quantity -= 1;
            currentItems[index].total -= currentItems[index].price.price;
            setitem(currentItems);
            handleQuery(currentItems[index].id.id, currentItems[index].name, currentItems[index].quantity, currentItems[index].total, currentItems[index].price.price, 'n');
        }
    };
    return (
        <div className="card">
            <div className="card__image">
                <Image image={image} />
            </div>
            <div className="card__details">
                <p className="foodsheading">{names}</p>
                <span>
                    <StarRatings
                        rating={rating}
                        starDimension="15px"
                        starSpacing="2px"
                        starRatedColor="#183454"
                    />
                </span>
                <span className="span1">{votes} votes</span>
                <p className="price">Rs.{price}</p>
            </div>
            <div className="quantity">
                {
                    item.map((food, i) => (
                        <div className="foodname" key={food.name}>
                            {(() => {
                                if (food.quantity === 0) {
                                    return (
                                        <div>
                                            <button className="add" onClick={() =>
                                                onInputChange(i)} >Add</button>
                                            <button className="countplus">+</button>
                                        </div>
                                    )
                                }
                                if (food.quantity >= 1) {
                                    return (
                                        <div>
                                            <button onClick={() => decreaseQuantity(i)
                                            } className="countplus">-</button>
                                            <button className="add">{food.quantity}</button>
                                            <button onClick={() =>
                                                onInputChange(i)} className="countplus">+</button>
                                        </div>
                                    )
                                }
                            })()}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Card