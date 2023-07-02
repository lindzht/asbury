import email from "../images/email.png"
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"

function Footer () {
    return(
        <footer>
            <div id="f-content">
                <img src={email} alt="email" />
                <img src={twitter} alt="email" />
                <img src={facebook} alt="email" />
                <img src={instagram} alt="email" />
            </div>
        </footer>
    )
}

export default Footer;