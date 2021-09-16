import React from 'react';
import StarRatings from 'react-star-ratings';
import '../css/Card.css';
//import Button from '@material-ui/core/Button';
//import AddIcon from '@material-ui/icons/Add';
//import ButtonGroup from '@material-ui/core/ButtonGroup';
//import RemoveIcon from '@material-ui/icons/Remove';
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
    //function Cart() {
    const [item, setitem] = React.useState(availableItems);
    const onInputChange = (e) => {
        const currentItems = [...item];
        currentItems[e].quantity += 1;
        currentItems[e].total += currentItems[e].price.price;
        setitem(currentItems);
        console.log(currentItems);
        //handleQuery(availableItems[e].id.id,availableItems[e].name, availableItems[e].quantity,availableItems[e].total,availableItems[e].price);
        //console.log(availableItems[e].id.id+" "+availableItems[e].name.names+" "+availableItems[e].quantity+" "+availableItems[e].total+" "+availableItems[e].price.price)
        handleQuery(currentItems[e].id.id, currentItems[e].name.names, currentItems[e].quantity, currentItems[e].total, currentItems[e].price.price, 'p');
    }

    /* const increaseQuantity = index => {
       const currentItems = [...item];
       currentItems[index].quantity += 1;
       currentItems[index].total +=  currentItems[index].price.price;
       setitem(currentItems);
       console.log(currentItems);
     };*/

    const decreaseQuantity = index => {
        const currentItems = [...item];
        if (currentItems[index].quantity > 0) {
            currentItems[index].quantity -= 1;
            currentItems[index].total -= currentItems[index].price.price;
            setitem(currentItems);
            console.log(currentItems);
            handleQuery(currentItems[index].id.id, currentItems[index].name, currentItems[index].quantity, currentItems[index].total, currentItems[index].price.price, 'n');
        }
    };
    // }
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
            {/*<div className="card__add">
                <ButtonGroup color="#183454" aria-label="outlined secondary button group" size="small">
                    <Button><RemoveIcon/></Button>
                    <Button>Add</Button>
                    <Button><AddIcon/></Button>
                </ButtonGroup>
            </div>*/}
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

