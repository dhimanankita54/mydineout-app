import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "./Redux/action";


export const Details = () => {

    const params = useParams();
    const res = params.name;
    console.log(res)

    return (
        <div></div>
    )
}