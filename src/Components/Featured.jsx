import React, { useState } from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "./Redux/action";
import "./styles/home.css";
import { Link } from "react-router-dom";
import datajs from "../db.json";

// import { useNavigate } from "react-router-dom";

function Featured() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 210;

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    useEffect(() => {
        dispatch(storeData(datajs.featured))
    }, [])

    const data = useSelector((state) => state.data);
    var location = useSelector((state) => state.location);

    return (
        <div>
            <div className="head-near">
                <h1 >Featured Restaurants</h1>
                {/* <p>See All</p> */}
            </div>
            <div className="main-div" style={{ padding: `0 ${chevronWidth}px` }}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={4}
                    gutter={9}
                    leftChevron={<button className="control-l">{'<'}</button>}
                    rightChevron={<button className="control-r">{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >

                    {
                        data.filter((e) => {
                            if (location === "") {
                                return e;
                            }
                            else {
                                return e.location.toLowerCase().includes(location.toLowerCase());
                            }
                        })
                            .map((e, index) => (
                                <div key={index} className="carousel-div">
                                    <Link to={{ pathname: `/details/${e.id}` }}>
                                        <img className="near-img" src={e.img}></img>
                                        <hr className="near-hr"></hr>
                                        <div className="near-content">
                                            <div className="near-des">
                                                <h4>{e.name}</h4>
                                                <p>{e.location}</p>
                                            </div>
                                            <button>{e.rating}</button>
                                        </div>
                                    </Link>
                                </div>
                            )
                            )}
                </ItemsCarousel>
            </div>
        </div>
    )
}

export default Featured;