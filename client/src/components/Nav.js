import { Link } from "react-router-dom";
import { useState } from "react";


function Nav () {

    const [displayShowSub, setDisplayShowSub] = useState(false);
    const [displayOppSub, setDisplayOppSub] = useState(false);
    
    const handleDisplayShow = () => {
        setDisplayShowSub(!displayShowSub);
        setDisplayOppSub(false);
    }
    const handleDisplayOpp = () => {
        setDisplayOppSub(!displayOppSub);
        setDisplayShowSub(false);
    }

    const closeAllSub = () => {
        setDisplayShowSub(false);
        setDisplayOppSub(false);
    };




    return(
        <div id="nav-container">

            <Link to="/about" onClick={closeAllSub}>
                <h1>About</h1>
            </Link>
    
            <div id="shows">
                <h1 onClick={handleDisplayShow} onMouseEnter={handleDisplayShow}>Shows</h1>
                    {displayShowSub ? 
                    <div id="nav-show-sub" onMouseLeave={closeAllSub}>
                        <Link to="upcoming" onClick={handleDisplayShow} >Upcoming Shows</Link>
                        <Link to="past" onClick={handleDisplayShow} >Past Shows</Link>  
                    </div> : null}
            </div>
            
            
            <div id="ops">
                <h1 onClick={handleDisplayOpp} onMouseEnter={handleDisplayOpp} >Opportunities  </h1>
                    {displayOppSub ? 
                    <div id="nav-op-sub" onMouseLeave={closeAllSub}>
                        <Link to="booking" onClick={handleDisplayOpp} >Book Us</Link>
                        <Link to="sponsorship" onClick={handleDisplayOpp} >Sponsorship</Link>
                        <Link to="submissions" onClick={handleDisplayOpp} >Submissions</Link>
                    </div> : null}   
            </div>
            
            <Link to="/contact" onClick={closeAllSub}>
                <h1>Contact</h1>
            </Link>
            <Link to="submissions" onClick={closeAllSub} >
                <h1 id="sub-to-u">Submit Your Film</h1>   
            </Link>
            
        </div>
    )
}

export default Nav;