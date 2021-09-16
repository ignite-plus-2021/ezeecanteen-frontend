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

    //const [timeArray,setTimeArray]=useState([]);
    const [time, setTime] = useState([]);
    const [status, setValue] = useState('');

    const [menuList, setMenuList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/api/fetch').then((response) => {
            setMenuList(response.data)
        });
    }, []);

    const templateParams = {
        to_name: 'Shivanya',
        from_name: 'EzeeCanteen',
        message: 'Order has been completed. Please pick your order',
        reply_to: 'shivanyapm22@gmail.com'
    };
    //var dtime='';
    function handleChange(e, i, a) {
        //const [time,setTime]=useState('');
        // const orderno = (props.location.state.orderno)


        // Axios.post('http://localhost:3001/api/fetch1', {
        //     // orderno: orderno
        // }).then((response) => {
        //     // console.log(response);
        //     if (response.data.message) {
        //         var options = {
        //             body: "Collect your order from the cafetaria",
        //             dir: "ltr"
        //         };
        //         var notification = new Notification("Your order is ready", options);
        //     }

        // });
        console.log(e);
        console.log(i);
        console.log(a);
        setValue(e.target.value);
        if (e.target.value === 'Completed') {
            Axios.post('http://localhost:3001/api/fetch1', {
                orderno: a
            }).then((response) => {
                // console.log(response);
                if (response.data.message) {
                    var options = {
                        body: "Order completed successfully",
                        dir: "ltr"
                    };
                    var notification = new Notification("ORDER COMPLETED!", options);
                }

            });
            console.log('order is completed');
            emailjs.send('service_af58f65', 'template_v2kunaz', templateParams, 'user_vRMtbv90VJBnqpTmFWrJN');
            //setTime(date.getHours()+":"+date.getMinutes());
            //var dtime=date.getHours()+":"+date.getMinutes();
            var timeL = [...time];
            //timeL[i-1]=date.getHours()+":"+date.getMinutes();
            timeL[i - 1] = date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })
            console.log(timeL);
            setTime(timeL);
            Axios.post('http://localhost:3001/orderstatus', {
                Ostatus: e.target.value,
                Oid: i,
                oNo: a,
            }).then((response) => {
                console.log(response);
            });
        }
    }
    console.log(time);

    /*function handleChange2(e){
        setValue(e.target.value);
        if(e.target.value==='Completed'){
            console.log('order is completed');
            emailjs.send('service_lkljp0o','template_0h1dvih',templateParams,'user_qJZz3nBsBq6soK8ZWBSy6');
            setTime2(date.getHours()+":"+date.getMinutes());
        
        }
    }*/

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
                        {menuList.map((val, i) => {
                            return (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.orderNo}</td>
                                    <td>{val.itemName}</td>
                                    <td>{val.itemQty}</td>
                                    <td>{val.username}</td>
                                    <td>{val.timetest}</td>
                                    <td>
                                        <select name="status" id="status" onKeyPress={(event) => handleChange(event, val.id, val.orderNo)}>
                                            <option value="In Progress">In Progress</option>
                                            <option value="Completed">Completed</option>
                                        </select>
                                    </td>

                                    <td>{time[i]}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default OrderDash