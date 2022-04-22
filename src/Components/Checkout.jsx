import React, { useState } from 'react';
import { Footer } from './Footer';
import PrimarySearchAppBar from './Navbar';
import './styles/checkout.css';
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import Button from '@mui/material/Button';



export const Checkout = () => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    const field = (name !== '') && (number !== "") && (email !== "");

    function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }
    function onOk(value) {
        console.log('onOk: ', value);
    }

    const handleSubmit = () => {
       alert("Your request has been booked!")
    }

    return (
        <div>
            <PrimarySearchAppBar />
            <div>
                <h3 className='check-head'>Pick Date and Time</h3>
                <Space direction="vertical" size={14}>
                    <DatePicker className="date-time" showTime onChange={onChange} onOk={onOk} />
                </Space>
            </div>
            <div className='checkout-form'>
                <form onSubmit={handleSubmit}>
                    <label className='label'>Enter Guest Details</label><br />
                    <input type="text" className="input" name="name"  onChange={(e) => setName(e.target.value)} placeholder="Enter guest name" /><br />
                    <input type="text" className="input" name="number" onChange={e => setNumber(e.target.value)} placeholder="Mobile Number" /><br />
                    <input type="text" className="input" name="email" onChange={e => setEmail(e.target.value)} placeholder="Enter Email Address" /><br />
                    <input type="submit" disabled={!field} className='pay_btn' value='PAY'></input>
                </form>
            </div>
            <Footer />
        </div>
    )
}