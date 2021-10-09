import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../css/BrowseFood.css';
import history from '../history';
import StarRatings from 'react-star-ratings';
import Card from '../components/Card';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function BrowseFood(props) {

    const [foodstate, setFoodState] = useState('lunch');
    var fullName = props.location.state.fullName;
    var data = props.location.state;
    var grandTotal = 0;
    const [orderNo, setOrderNo] = useState(0);
    useEffect(() => {
        Axios.get('http://localhost:3001/count').then((response) => {
            setOrderNo(response.data)
        });
    }, []);
    const [ord, setOrd] = useState(0);
    const set = () => {
        setOrd(orderNo[0].orderNo);
        console.log(ord);
    }
    const [number, setNumber] = useState(0);
    const [selectList, setSelectList] = useState([])
    var subTotal = [];

    for (var i = 0; i < 5; i++) {
        subTotal[i] = 0;
    }
    var grandTotal = 0;
    var Totalcount = 0;
    const handleQuery = (id, names, quantity, total, price, np) => {
        const newList = [...selectList];
        newList[id] = [id, names, quantity, total, price, np];
        console.log(id);
        setSelectList(newList);
        console.log(newList[id]);
        set();
        console.log("siegfhgh", quantity)
    }
    const [count, setcount] = useState([]);


    const onNumberChange = () => {
        setNumber(number);
    }
    console.log()
    console.log("Total is " + Totalcount);
    console.log("The array elements are: " + selectList);
    console.log(selectList)
    const [menuList, setMenuList] = useState([])
    const [lunchList, setLunchList] = useState([])
    const [snackList, setSnackList] = useState([])
    useEffect(() => {

        Axios.get('http://localhost:3001/api/get/breakfast').then((response) => {
            setMenuList(response.data)
        });
    }, []);

    useEffect(() => {

        console.log(foodstate === "lunch");
        Axios.get('http://localhost:3001/api/get/lunch').then((response) => {
            setLunchList(response.data)
            console.log(response.data);
        });
    }, []);
    useEffect(() => {

        console.log(foodstate === "snacks");
        Axios.get('http://localhost:3001/api/get/snacks').then((response) => {
            setSnackList(response.data)
            console.log(response.data);
        });
    }, []);
    var count1 = selectList.length
    var s = 0;
    var grandTotal = 0;
    for (var i = 1; i <= count1; i++) {
        console.log("fdfth")
        if (selectList[i] == undefined) {

        }
        else {
            console.log(selectList[i][2])
            s = s + selectList[i][2]
            grandTotal = grandTotal + selectList[i][3]
            console.log(s)
        }
    }
    // selectList.forEach(element => {
    //     // console.log("ee" + element[6])
    //     if (element === undefined) {
    //         console.log("nothing");
    //     }
    //     else {
    //         if (element[5] === 'p') {
    //             grandTotal = grandTotal + element[3];
    //         }
    //         else if (element[5] === 'n') {
    //             grandTotal = (grandTotal - element[3]);
    //         }
    //         else if (element[5] === 'cp') {
    //             grandTotal = grandTotal + element[3];
    //         }
    //         else if (element[5] === 'cn') {
    //             grandTotal = (grandTotal - element[3]);
    //         }
    //     }
    //     if (grandTotal < 0) {
    //         grandTotal = grandTotal * -1;
    //     }
    // });

    console.log("Grand Total is" + grandTotal);
    const [loginName, setFullName] = useState();
    const [email, setemail] = useState()
    useEffect(() => {
        if (props.location && props.location.state && props.location.state.email) {
            const email = props.location.state.email;
            const loginName = props.location.state.fullName;
            setFullName({ fullname: loginName });
            setemail({ email: email })
        }
    }, []);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/id').then((response) => {
            setUsers(response.data)
        });
    }, []);
    console.log(users);
    var num = 0;
    var userId;
    users.forEach((element) => {
        if (element.fullname === fullName) {
            userId = element.userid;
            num = 1;
        }
    });
    const [id, setId] = useState(0);
    console.log("USER ID IS");
    console.log(userId);
    let dineOption = 'breakfast';
    const setDineOption = () => {
        const d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var bstart = 8
        var bEndHr = 11;
        var bEndMin = 30;
        var lunchStart = 12;
        var lunchEnd = 15;
        if (h >= bstart && h < bEndHr) {
            dineOption = 'breakfast';

        } else if (h == bEndHr) {
            if (m > bEndMin) {
                dineOption = 'snacks';
            } else
                dineOption = 'lunch';
        } else if (h >= lunchStart && h < lunchEnd) {
            dineOption = 'lunch';
        } else {
            dineOption = 'snacks';
        }
    }
    setDineOption();
    var food = foodstate;
    return (
        <div>
            <Header loginDetails={loginName} loginEmail={email} number={s} onNumberChange={onNumberChange} />
            <div className="dropdownb">
                {(() => {

                    return (
                        <div className="dropdown__1">
                            <select className="selectb" name="timings" id="timings" onChange={(e) => {
                                const selectedFood = e.target.value;
                                setFoodState(selectedFood)
                            }}>
                                <option value="breakfast" selected={dineOption === 'breakfast' ? 'selected' : ''}>Breakfast (8am-11:30am)</option>
                                <option value="lunch" selected={dineOption === 'lunch' ? 'selected' : ''}>Lunch (12pm-3pm)</option>
                                <option value="snacks" selected={dineOption === 'snacks' ? 'selected' : ''}>Snacks - All day</option>

                            </select>
                        </div>
                    )
                })()}
                <div className="dropdown__2">
                    <select className="selectb" name="store" id="store">
                        <option value="shanti_sagar">Shanti Sagar</option>
                    </select>
                </div>
            </div>
            <div className="col">
                <div className="v1"></div>
                <div className="column2">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline' }}>
                        <h1 style={{ paddingRight: '20px' }}>Shanti Sagar</h1>
                        <StarRatings
                            rating={3}
                            starDimension="20px"
                            starSpacing="2px"
                            starRatedColor="#183454"
                        />
                    </div>
                    <div>

                        {
                            menuList.map((val) => {
                                console.log(foodstate === "breakfast");
                                console.log(foodstate);
                                const d = new Date();

                                var h = d.getHours();
                                var m = d.getMinutes();

                                var bstart = 8
                                var bEndHr = 11;
                                var bEndMin = 30;

                                if (h >= bstart && h < bEndHr) {
                                    if (foodstate === "breakfast") {
                                        return (

                                            <div style={{ display: 'flex', flexWrap: "wrap" }}>
                                                <Card id={val.id} image={val.image.data} price={val.Cost} names={val.Name} rating={val.Rating} votes={val.Votes} handleQuery={handleQuery} />
                                            </div>
                                        )
                                    }
                                }
                            }
                            )}

                        {lunchList.map((val) => {
                            const d = new Date();

                            var h = d.getHours();
                            var m = d.getMinutes();

                            var bstart = 21
                            var bEndHr = 11;
                            var bEndMin = 30;
                            var lunchStart = 12;
                            var lunchEnd = 15;

                            if (h >= lunchStart && h < lunchEnd) {
                                if (foodstate === "lunch") {
                                    return (

                                        <div style={{ display: 'flex', flexWrap: "wrap" }}>
                                            <Card id={val.id} image={val.image.data} price={val.price} names={val.names} rating={val.rating} votes={val.votes} handleQuery={handleQuery} />
                                        </div>
                                    )
                                }
                            }
                        })}
                        {snackList.map((val) => {
                            if (foodstate === "snacks") {
                                return (

                                    <div style={{ display: 'flex', flexWrap: "wrap" }}>
                                        <Card id={val.id} image={val.image.data} price={val.price} names={val.names} rating={val.rating} votes={val.votes} handleQuery={handleQuery} />
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
            <div>
                {(() => {
                    if (selectList.length >= 1 && grandTotal != 0) {
                        return (
                            <div className="footer" style={{ display: 'flex', justifyContent: "end" }} >
                                <p id="total">SubTotal: Rs.{grandTotal}</p>
                                &nbsp;&nbsp;
                                <Link to={{
                                    pathname: "/Checkout",
                                    state: { ...selectList, data, ord, userId, foodstate }
                                }} >
                                    <button type="submit" id="cont" >Continue</button>
                                </Link>
                            </div>
                        )
                    }
                })()}
            </div>
        </div>
    )
}
export default BrowseFood