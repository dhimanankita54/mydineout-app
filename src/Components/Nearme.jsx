import React, { useState } from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "./Redux/action";
import "./styles/home.css";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NearMeCarousel() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 210;

    const dispatch = useDispatch();


    useEffect(() => {
        fetch("http://localhost:3000/nearme")
            .then((res) => res.json())
            .then((res) => dispatch(storeData(res)))
            .catch((err) => dispatch(err))
    }, [])

    const data = useSelector((state) => state.data);
    var location = useSelector((state) => state.location);

    return (
        <div>
            <div className="head-near">
                <h1 >Restaurants Near You </h1>
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
                                    <Link to={{ pathname: `/details/${e.name}`, state: data }}>
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

export default NearMeCarousel;