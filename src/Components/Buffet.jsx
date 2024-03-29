import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { buffet } from "./Redux/action";
import { Link } from "react-router-dom";
import "./styles/buffet.css";
import PrimarySearchAppBar from "./Navbar";
import { Footer } from "./Footer";
import datajs from "../db.json";

export const Buffet = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(buffet(datajs.buffet))
    }, [])

    const data = useSelector((state) => state.buffet);


    return (
        <div>
            <PrimarySearchAppBar />
            <h3 className="buffet-head">Buffet Restaurants</h3>
            <div className="container">
                {data.map((e, index) => (
                    <div key={index} className="buffet-div">
                        <Link to={{ pathname: `/buffetdetails/${e.id}`, state: data }}>
                            <img className="buffet-img" src={e.img}></img>
                            <hr className="buffet-hr"></hr>
                            <div className="buffet-content">
                                <div className="buffet-des">
                                    <h4>{e.name}</h4>
                                    <p>{e.location}</p>
                                </div>
                                <button>{e.rating}</button>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>
            <Footer />
        </div>
    )
}