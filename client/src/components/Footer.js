import email from "../images/email.png"
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import { Link } from "react-router-dom"

function Footer ({isDesktop}) {
    return(
        <footer>
            {isDesktop ? 
            <div id="f-l-content">
                <Link to="about" >About</Link>
                <Link to="upcoming" >Upcoming Shows</Link>
                <Link to="past" >Past Shows</Link>
                <Link to="booking" >Book Us</Link>
                <Link to="sponsorship" >Sponsorship</Link>
                <Link to="submissions" >Submissions</Link>
                <Link to="contact" >Contact</Link>
            </div> : null}
            <div id="f-content">
                <img src={email} alt="email" />
                <img src={twitter} alt="email" />
                <img src={facebook} alt="email" />
                <img src={instagram} alt="email" />
                {/* <p>Web Design By Lindsay Taylor</p> */}
                
            </div>
        </footer>
    )
}

export default Footer;