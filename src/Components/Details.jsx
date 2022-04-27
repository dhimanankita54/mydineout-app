import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "./Redux/action";
import PrimarySearchAppBar from "./Navbar";
import { Footer } from './Footer';
import "./styles/details.css";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"

export const Details = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const id = params.id;
    console.log(id)

    useEffect(() => {
        fetch("https://json-server-dineout.herokuapp.com/nearme")
            .then((res) => res.json())
            .then((res) => dispatch(storeData(res)))
            .catch((err) => dispatch(err))
    }, [])


    const data = useSelector((state) => state.data);

    // useEffect(() => {
    //    let newArr = data.filter((e) => e.name === name);
    //     setDetail(newArr)
    // }, [name])

    return (
        <div>
            <PrimarySearchAppBar />
            {
                data.filter((e) => {
                    if (e.id == id) {
                        return true;
                    }
                })
                    .map((e, index) => (
                        <div key={index}>
                            <div className="img-div">
                                <img src={e.img} />
                                <img src={e.img2} />
                            </div>
                            <div className="img-cap">
                                <h3>{e.name}</h3>
                                <p>{e.price} | {e.location}</p>
                                <h3 className="abt">About: </h3>
                                <p className="desc">{e.description}</p>
                                <h3>Menu:</h3>
                                <div className="menu-div">
                                    <img className="menu-img" src={e.menu1} />
                                    <img className="menu-img" src={e.menu2} />
                                    <img className="menu-img" src={e.menu3} />
                                    <img className="menu-img" src={e.menu4} />
                                    <img className="menu-img" src={e.menu5} />
                                </div>
                                <h3 className="contact">Contact Us: {e.contact}</h3>
                            </div>
                           <Link to={{pathname: "/checkout"}}><Button variant="contained" className='book_btn'>Book Now</Button></Link> 
                        </div>
                    ))
            }
            <Footer />
        </div >
    )
}