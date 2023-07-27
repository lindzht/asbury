import { Link } from "react-router-dom";
import { useState } from "react";


function Nav () {

    const [displayShowSub, setDisplayShowSub] = useState(false);
    const [displayOppSub, setDisplayOppSub] = useState(false);
    
    const handleDisplayShow = () => {
        setDisplayShowSub(!displayShowSub);
    }
    const handleDisplayOpp = () => {
        setDisplayOppSub(!displayOppSub);
    }


    return(
        <div id="nav-container">
            <Link to="/about">
                <h1>About</h1>
            </Link>
    
            <h1 onClick={handleDisplayShow}>Shows</h1>
                {displayShowSub ? 
                <div id="nav-show-sub">
                    <Link to="upcoming" >Upcoming Shows</Link>
                    <Link to="past">Past Shows</Link>  
                </div> : null}
            
            <h1 onClick={handleDisplayOpp}>Opportunities</h1>
                {displayOppSub ? 
                <div id="nav-op-sub">
                    <Link to="booking" >Book Us</Link>
                    <Link to="sponsorship" >Sponsorship</Link>
                    <Link to="submissions" >Submissions</Link>
                </div> : null}
            
            <Link to="/about">
                <h1>Contact</h1>
            </Link>
            
        </div>
    )
}

export default Nav;