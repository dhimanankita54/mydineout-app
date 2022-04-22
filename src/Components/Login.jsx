import Button from '@mui/material/Button';
import "./styles/login.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { store } from './Redux/store';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const UserEmail = useSelector((state) => state.addUser.email)
    const UserPassword = useSelector((state) => state.addUser.password)

    const handleSubmit = () => {
        const { email, password } = user;

        if (
            UserEmail === email &&
            UserPassword === password
        ) {
            navigate("/")
        } else {
            console.log("email or password is wrong!");
            console.log(store.getState().add_user_action);
        }
    };


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid grey',
        boxShadow: 14,
        p: 4,
    };

    return (
        <div>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" color="#FF645A" fontWeight="bolder">
                    Login
                </Typography>
                <input type="text" className="modal-input" placeholder="Enter your Email" value={user.email} name="email" onChange={handleChange} />
                <input type="text" className="modal-input" placeholder="Enter your Password" value={user.password} name="password"onChange={handleChange} />
                <Button variant="contained" onClick={handleSubmit} className='submit_btn'>Continue</Button>
                <hr></hr>
                <div className="social_btn">
                    <Button variant="contained" className='facebook_btn'>Facebook</Button>
                    <Button variant="contained" className='google_btn'>Google</Button>
                </div>
            </Box>
        </div>
    )
}

