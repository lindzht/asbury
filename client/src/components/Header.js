import Nav from "./Nav";
import MobNav from "./NavMobile";
import { useMediaQuery } from 'react-responsive'
import {Link} from "react-router-dom";
import { useState } from "react";


function Header ( ){

    const isDesktop = useMediaQuery({query: '(min-width: 992px)'})
    const [displayMobNav, setDisplayMobNav] = useState(false);

    const handleMobileDisplay = () => {
        setDisplayMobNav(!displayMobNav);
    }

    return(
        <div id="header-container">
            <Link to="/">
                <img style={{width: 100}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949" alt="placeholder" />
            </Link>

            {isDesktop ? <Nav /> : <h3 onClick={handleMobileDisplay}>Menu</h3>} 
            {displayMobNav ? <Link to="menu"><MobNav handleMobileDisplay={handleMobileDisplay}/></Link> : null}
        </div>
    )
}

export default Header;