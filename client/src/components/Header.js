import Nav from "./Nav";
import MobNav from "./NavMobile";
import {Link} from "react-router-dom";
import { useState } from "react";
import LogoBackup from "../images/asbury_logo_h.png"
import Hamburger from "../images/hamburger_white.png"


function Header ({isDesktop, displayMobNav, handleMobileDisplay} ){

    const [scrollingHeader, setScrollingHeader] = useState(false);
    window.onscroll = function() {scrollFunction();}
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            setScrollingHeader(true);
        } else {setScrollingHeader(false);}
    }


    return(
        <div id={scrollingHeader ? "header-container-mobscroll": "header-container"}>
            {scrollingHeader ? <Link to="/"><h4>Asbury Shorts USA</h4></Link> : 
                <Link to="/"><img id="logo-img" src={LogoBackup} alt="Logo" /></Link>}

            {isDesktop ? <Nav /> : (scrollingHeader ? <img src={Hamburger} id="hamburger" alt="menu" onClick={handleMobileDisplay} /> : <h3 onClick={handleMobileDisplay}>Menu</h3>)} 
            {displayMobNav ? <MobNav handleMobileDisplay={handleMobileDisplay}/> : null}
        </div>
    )
}

export default Header;