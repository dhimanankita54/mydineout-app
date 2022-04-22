import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { buffet } from "./Redux/action";
import PrimarySearchAppBar from "./Navbar";
import { Footer } from './Footer';
import "./styles/details.css"

export const BuffetDetails = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const id = params.id;
    console.log(id)

    useEffect(() => {
        fetch(`http://localhost:3000/buffet`)
            .then((res) => res.json())
            .then((res) => dispatch(buffet(res)))
            .catch((err) => dispatch(err))
    }, [])


    const data = useSelector((state) => state.buffet);

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
                                <p><h3 className="abt">About: </h3>{e.description}</p>
                                <h3>Menu:</h3>
                                <div className="menu-div">
                                    <img className="menu-img" src={e.menu1} />
                                    <img className="menu-img" src={e.menu2} />
                                    <img className="menu-img" src={e.menu3} />
                                    <img className="menu-img" src={e.menu4} />
                                    <img className="menu-img" src={e.menu5} />
                                </div>
                                <h3>Contact Us: {e.contact}</h3>
                            </div>

                        </div>
                    ))
            }
            <Footer />
        </div >
    )
}