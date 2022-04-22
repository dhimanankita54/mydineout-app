import "./styles/home.css"
import { Link } from "react-router-dom";
export const Links = () => {
    return (
        <div className="section-link">
            <Link to={{pathname: "/buffet"}}>
            <div className="page-link">
                <img src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png" />
                <h4>Buffet</h4>
            </div>
            </Link>
            <Link to={{pathname: "/pocket"}}>
            <div className="page-link">
                <img src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pocket_friendly.png" />
                <h4>Pocket Friendly</h4>
            </div>
            </Link>
            <Link to={{pathname: "/mustVisit"}}>
            <div className="page-link">
                <img src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/must_visit.png" />
                <h4>Must Visit</h4>
            </div>
            </Link>
            <Link to={{pathname: "/new"}}>
            <div className="page-link">
                <img src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/new_on_dineout.png" />
                <h4>New On Dineout</h4>
            </div>
            </Link>
        </div>
    )
}