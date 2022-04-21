import { useEffect, useState } from "react";
import { useParams ,useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "./Redux/action";


export const Details = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const name = params.name;

    useEffect(() => {
        fetch(`http://localhost:3000/nearme`)
            .then((res) => res.json())
            .then((res) => dispatch(storeData(res)))
            .catch((err) => dispatch(err))
    }, [])


    const data = useSelector((state) => state.data);

    return (
        <div>
            {
                data.filter((e) => {
                    if(e.name === name){
                       return e;
                    }
                })
                .map((e) => (
                    <div>{e.description}</div>
                ))
            }
        </div>
    )
}