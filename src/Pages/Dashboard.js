import React, { useState, useEffect } from 'react';
import VendorHeader from '../components/VendorHeader';
import '../css/Dashboard.css';
import emailjs from 'emailjs-com';
import Axios from 'axios';

const OrderDash = (props) => {

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    const [time, setTime] = useState([]);
    const [menuList, setMenuList] = useState([]);
    const [status, setValue] = useState('');
    //Get the order list
    useEffect(() => {
        Axios.get('http://localhost:3001/api/fetch').then((response) => {
            setMenuList(response.data)
        });
    }, []);
    //Configuring email.js
    const templateParams = {
        to_name: 'Shivanya',
        from_name: 'EzeeCanteen',
        message: 'Order has been completed. Please pick your order',
        reply_to: 'shivanyapm22@gmail.com'
    };
    function handleChange(e, i, a) {
        setValue(e.target.value);
        if (e.target.value === 'Completed') {
            Axios.post('http://localhost:3001/api/fetch1', {
                orderno: a
            }).then((response) => {
                if (response.data.message) {
                    var options = {
                        body: "Order completed successfully",

                    };
                    var notification = new Notification("ORDER COMPLETED!", options);
                }
            });
            emailjs.send('service_af58f65', 'template_v2kunaz', templateParams, 'user_vRMtbv90VJBnqpTmFWrJN');
            var timeL = [...time];
            timeL[i - 1] = date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })
            setTime(timeL);
            //Changing order status
            Axios.post('http://localhost:3001/orderstatus', {
                Ostatus: e.target.value,
                Oid: i,
                oNo: a,
            }).then((response) => {
            });
        }
    }
    return (
        <div>
            <VendorHeader />
            <div className="heading">Orders Dashboard</div>
            <div className="row1">
                <div className="dropdown">
                    <select name="date" id="date">
                        <option value="date">{day}-{month}-{year}</option>
                    </select>
                </div>
                <div>
                    <button className="menu">Go to Update Menu</button>
                </div>
            </div>
            <div>
                <table className="table__1">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Order No.</td>
                            <td>Food Item</td>
                            <td>Quantity</td>
                            <td>Ordered By</td>
                            <td>Time</td>
                            <td>Order Status</td>
                            <td>Order Completed at</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menuList.map((val, l) => {
                                if (val.orderStatus === "In Progress") {
                                    return (
                                        <tr>
                                            <td>{val.id}</td>
                                            <td>{val.orderNo}</td>
                                            <td>{val.itemName}</td>
                                            <td>{val.itemQty}</td>
                                            <td>{val.username}</td>
                                            <td>{val.timetest}</td>
                                            <td>
                                                <select name="status" id="status" onChange={(event) => handleChange(event, val.id, val.orderNo)} >
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Completed">Completed</option>
                                                </select>
                                            </td>
                                            <td>{time[l]}</td>
                                        </tr>
                                    )
                                }
                            }
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default OrderDash