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
            <hr className="sep"></hr>
            <div className="footer-links">
                <div className="discover">
                    <div className="dis-heading">
                        <h6 className="head">Discover</h6>
                        <hr className="section-hr"></hr>
                    </div>
                    <div className="dis_links">
                        <li>Trending Restaurants</li>
                        <li>Super savers</li>
                        <li>Dineout Pay</li>
                        <li>Contactless Dining</li>
                    </div>
                </div>
                <div className="about">
                    <div className="about-heading">
                        <h6 className="head">About</h6>
                        <hr className="section-hr"></hr>
                    </div>
                    <div className="dis_links">
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Dineout for Business</li>
                        <li>Add Restaurant</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </div>
                </div>
                <div className="cuisines">
                    <div className="about-heading">
                        <h6 className="head">Top Cuisines</h6>
                        <hr className="section-hr"></hr>
                    </div>
                    <div className="dis_links">
                        <li>Chinese</li>
                        <li>Italian</li>
                        <li>South Indian</li>
                        <li>Mexican</li>
                        <li>Bengali</li>
                        <li>Thai</li>
                    </div>
                </div>
                <div className="facility">
                    <div className="about-heading">
                        <h6 className="head">Top Facilities</h6>
                        <hr className="section-hr"></hr>
                    </div>
                    <div className="dis_links">
                        <li>Fine Dining</li>
                        <li>5 Star</li>
                        <li>Rooftop</li>
                    </div>
                </div>
                <div className="location">
                    <div className="about-heading">
                        <h6 className="head">Top Locations</h6>
                        <hr className="section-hr"></hr>
                    </div>
                    <div className="dis_links">
                        <li>Rajouri Garden</li>
                        <li>Hauz Khass Village</li>
                        <li>DLF Cyber City</li>
                        <li>Cannaught Place</li>
                    </div>
                </div>
            </div>
            <hr className="sep"></hr>
            <div className="contact">
                <img className="logo" src='https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png' />
                <div className="contact-p">
                    <p>Find the best Restaurants, Deals, Discounts & Offers</p>
                    <h6>Contact: +91-9212340202</h6>
                </div>
                <div className="social-div">
                    <img src="https://cdn-icons-png.flaticon.com/128/187/187209.png" />
                    <img src="https://cdn-icons.flaticon.com/png/128/3670/premium/3670032.png?token=exp=1650441038~hmac=2deb3070fbc811178ed2d5785a96ad83" />
                    <img src="https://cdn-icons.flaticon.com/png/128/4138/premium/4138124.png?token=exp=1650441119~hmac=f98783553cf5db7d67975cbbc1d075f9" />
                    <img src="https://cdn-icons-png.flaticon.com/128/145/145812.png" />
                </div>
                <p>© 2017, dineout.co.in. All Rights Reserved.</p>
            </div>
        </div>
    )
}