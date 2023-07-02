import Nav from "./Nav";
import MobNav from "./NavMobile";
import {Link} from "react-router-dom";
import { useState } from "react";
import LogoBackup from "../images/asbury_logo_h.png"


function Header ({isDesktop} ){

    const [displayMobNav, setDisplayMobNav] = useState(false);
    const handleMobileDisplay = () => {
        setDisplayMobNav(!displayMobNav);
    }

    return(
        <div id="header-container">
            <Link to="/">
                <img id="logo-img" src={LogoBackup} alt="Logo" />
            </Link>

            {isDesktop ? <Nav /> : <h3 onClick={handleMobileDisplay}>Menu</h3>} 
            {displayMobNav ? <Link to="menu"><MobNav handleMobileDisplay={handleMobileDisplay}/></Link> : null}
        </div>
    )
}

export default Header;