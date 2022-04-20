import "./styles/footer.css"

export const Footer = () => {
    return (
        <div>
            <div className="available">
                <div className="heading">
                    <h6 className="head">Available in</h6>
                    <hr className="hr"></hr>
                </div>
                <div className="av_links">
                    <ul>
                        <li>Delhi</li>
                        <li>Pune</li>
                        <li>Jaipur</li>
                        <li>Vadodara</li>
                    </ul>
                    <ul>
                        <li>Mumbai</li>
                        <li>Kolkata</li>
                        <li>Lucknow</li>
                        <li>Nagpur</li>
                    </ul>
                    <ul>
                        <li>Bangalore</li>
                        <li>Ahmedabad</li>
                        <li>Indore</li>
                        <li>Kochi</li>
                    </ul>
                    <ul>
                        <li>Chennai</li>
                        <li>Chandigarh</li>
                        <li>Udaipur</li>
                        <li>Surat</li>
                    </ul>
                    <ul>
                        <li>Hyderabad</li>
                        <li>Goa</li>
                        <li>Agra</li>
                        <li>Ludhiana</li>
                    </ul>
                </div>
            </div>
            <div className="footer-links"></div>
            <div className="contact"></div>
        </div>
    )
}