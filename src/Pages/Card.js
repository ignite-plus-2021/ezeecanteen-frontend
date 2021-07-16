import React from 'react';
import StarRatings from 'react-star-ratings';
import '../css/Card.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RemoveIcon from '@material-ui/icons/Remove';
import Image from './Image';
const Card = ({image,price,names,rating,votes}) =>{
    
    return(
        <div className="card">
            <div className="card__image">
               <Image image={image}/>
            </div>
            <div className="card__details">
                <p className="heading">{names}</p>
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
            <div className="card__add">
                <ButtonGroup color="#183454" aria-label="outlined secondary button group" size="small">
                    <Button><RemoveIcon/></Button>
                    <Button>Add</Button>
                    <Button><AddIcon/></Button>
                </ButtonGroup>
            </div>
        </div>
    )
}
export default Card