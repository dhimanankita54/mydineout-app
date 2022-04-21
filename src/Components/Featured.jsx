import React, { useState } from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { storeData } from "./Redux/action";
import "./styles/home.css"

function Featured() {
    const [active, setaAtive] = useState(0);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [coming, setcoming] = useState([]);
    const chevronWidth = 210;

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:3000/featured")
            .then((res) => res.json())
            .then((res) => dispatch(storeData(res)))
            .catch((err) => dispatch(err))
    }, [])

    const data = useSelector((state) => state.data);

    return (
        <div>
            <div className="head-near">
                <h1 >Featured Restaurants</h1>
                <p>See All</p>
            </div>
            <div className= "main-div"style={{ padding: `0 ${chevronWidth}px` }}>
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

                    {data.map((e) => (
                        <div className="carousel-div">
                            <img className="near-img" src={e.img}></img>
                            <hr className="near-hr"></hr>
                            <div className="near-content">
                                <div className="near-des">
                                    <h4>{e.name}</h4>
                                    <p>{e.location}</p>
                                </div>
                                <button>{e.rating}</button>
                            </div>
                        </div>
                    )
                    )}
                </ItemsCarousel>
            </div>
        </div>
    )
}

export default Featured;