import Nav from "./Nav";
import MobNav from "./NavMobile";
import {Link} from "react-router-dom";
import { useState } from "react";
import LogoBackup from "../images/asbury_logo_h.png"


function Header ({isDesktop, displayMobNav, handleMobileDisplay} ){



    return(
        <div id="header-container">
            <Link to="/">
                <img id="logo-img" src={LogoBackup} alt="Logo" />
            </Link>

            {isDesktop ? <Nav /> : <h3 onClick={handleMobileDisplay}>Menu</h3>} 
            {displayMobNav ? <MobNav handleMobileDisplay={handleMobileDisplay}/> : null}
        </div>
    )
}

export default Header;