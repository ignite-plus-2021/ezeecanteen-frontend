import React, {useEffect, useState} from 'react';
import Header from './Header';
import '../css/BrowseFood.css';
import StarRatings from 'react-star-ratings';
import Card from './Card';
import Axios from 'axios';


function BrowseFood(){
   
        const [menuList,setMenuList]=useState([])
        useEffect(()=>{
            Axios.get('http://localhost:3001/api/get').then((response)=>{
                setMenuList(response.data)
            });
        },[]);
        
        return(
            <div>
                <Header />
                <div className="dropdown">
                    <div className="dropdown__1">
                        <select name="timings" id="timings">
                            <option value="breakfast">Breakfast (8am-11:30am)</option>
                            <option value="lunch">Lunch (12pm-3pm)</option>
                            <option value="snacks">Snacks - All day</option>
                        </select>
                    </div>
                    <div className="dropdown__2">
                        <select name="store" id="store">
                            <option value="shanti_sagar">Shanti Sagar</option>
                        </select>
                    </div>
                </div>
                <div className="col">
                    <div className="v1"></div>
                    <div className="column2">
                        <div style={{display:'flex',flexWrap:'wrap',alignItems:'baseline'}}>
                            <h1 style={{paddingRight:'20px'}}>Shanti Sagar</h1>
                            <StarRatings
                                rating={3}
                                starDimension="20px"
                                starSpacing="2px"
                                starRatedColor="#183454"
                            />
                        </div>
                        <div>
                            {menuList.map((val) =>{
                               return(
                                    <div style={{display:'flex', flexWrap:"wrap"}}>
                                    <Card image={val.image.data} price={val.Cost} names={val.Name} rating={val.Rating} votes={val.Votes}/>
                                    </div>
                               )
                            })}
                        </div>
                        
                    </div>
                </div>

            </div>
        )
    
}
export default BrowseFood