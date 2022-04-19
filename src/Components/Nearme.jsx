import React, { useState } from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";
import { useEffect } from "react";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function NearMeCarousel() {
    const [active, setaAtive] = useState(0);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [coming, setcoming] = useState([]);
    const chevronWidth = 120;

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch("https://secure-tor-86460.herokuapp.com/ImdbOriginals")
            .then((res) => res.json())
            .then((data) => {
                setcoming(data);
            })
    }

    return (
        <div>
            <div className="head vl">
                <h1 >IMDb Originals <ArrowForwardIosIcon
              // sx={{ color: "#F5C519" }}
              className="arrowColor"
            /></h1>
            </div>
            <p className="head-p">Celebrity interviews, trending entertainment stories, and expert analysis</p>
            <div style={{ padding: `0 ${chevronWidth}px` }}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={10}
                    leftChevron={<button className="control-l">{'<'}</button>}
                    rightChevron={<button className="control-r">{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                </ItemsCarousel>
            </div>
        </div>
    )
}

export default NearMeCarousel;