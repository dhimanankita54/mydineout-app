import Button from '@mui/material/Button';
import "./styles/login.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch  } from 'react-redux';
import { add_user_action } from './Redux/action';
import { store } from './Redux/store';
import { Link, useNavigate } from 'react-router-dom';

export const Signup = () => {

    const [user, setUser] = React.useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation:""
    })

    const dispatch = useDispatch();
    const navigate = useNavigate()
    // const add_user =  dispatch(add_user_action(user))
    // console.log(add_user)

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handlePassword = () => {
        const { username, email, password, passwordConfirmation } = user;
    
        if (password === passwordConfirmation) {
          alert("SUCCESS!!");
          store.dispatch(
            add_user_action({ username: username, email: email, password: password })
          );
    
          navigate('/login')
        } else {
          alert("passwords not matching");
        }
      };

     const handleSubmit = () => {
        const { username, email, password, passwordConfirmation } = user;
        if (username === "" || email === "") {
          alert("please fill out the missing fields!");
        } else if (password === "" || passwordConfirmation === "") {
          alert("please fill out the password form!");
        } else {
          handlePassword();
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
                <form >
                    <input type="text" className="modal-input" placeholder="Enter your Name" name="name" value={user.name} onChange={handleChange} />
                    <input type="text" className="modal-input" placeholder="Enter your Email" value={user.email} name="email" onChange={handleChange} />
                    <input type="text" className="modal-input" placeholder="Enter your Password" value={user.password} name="password" onChange={handleChange} />
                    <input type="text" className="modal-input" placeholder="Confirm Password" value={user.passwordConfirmation} name="passwordConfirmation" onChange={handleChange} />
                    <Button variant="contained" onClick={handleSubmit} className='submit_btn'>Continue</Button>
                </form>
                <hr></hr>
                <div className="social_btn">
                    <Button variant="contained" className='facebook_btn'>Facebook</Button>
                    <Button variant="contained" className='google_btn'>Google</Button>
                </div>
            </Box>
        </div>
    )
}