import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { storeData } from "./Redux/action";

export const Buffet = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:3000/buffet")
            .then((res) => res.json())
            .then((res) => dispatch(storeData(res)))
            .catch((err) => dispatch(err))
    }, [])

    const data = useSelector((state) => state.buffet);


    return (
        <div>
            
        </div>
    )
}