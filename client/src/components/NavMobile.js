import {Link} from "react-router-dom";
import { useState } from "react";


function MobNav ({handleMobileDisplay}) {

    const [displayShowSub, setDisplayShowSub] = useState(false);
    const [displayOppSub, setDisplayOppSub] = useState(false);
    
    const handleDisplayShow = () => {
        setDisplayShowSub(!displayShowSub);
    }
    const handleDisplayOpp = () => {
        setDisplayOppSub(!displayOppSub);
    }


    return(
        <div id="mob-nav-container">
            <div id="mob-nav-content">
                <h3 onClick={handleMobileDisplay}>{"<<<"}</h3>
                <Link to="/" onClick={handleMobileDisplay}>Home</Link>
                <br />
                <br />
                <Link to="about" onClick={handleMobileDisplay}>About</Link>
                <h3 onClick={handleDisplayShow}>Shows +</h3>
                    {displayShowSub ? 
                        <div className="sub-nav">  
                            <Link to="upcoming" onClick={handleMobileDisplay}> —Upcoming Shows</Link>
                            <Link to="past" onClick={handleMobileDisplay}> —Past Shows</Link>  
                        </div> 
                    : null }
                <h3 onClick={handleDisplayOpp}>Opportunities +</h3>
                    {displayOppSub ? 
                        <div className="sub-nav">   
                            <Link to="booking" onClick={handleMobileDisplay}> —Book Us</Link>
                            <Link to="sponsorship" onClick={handleMobileDisplay}> —Sponsorship</Link>
                            <Link to="submissions" onClick={handleMobileDisplay}> —Submissions</Link>
                        </div> 
                        : null }
                <Link to="contact" onClick={handleMobileDisplay}>Contact</Link>

                <div id="mob-nav-bottom">
                    <h5><strong>Email:</strong> dougleclaire54@yahoo.com</h5>
                    <h5><strong>Phone:</strong> +1.718.510.6929</h5>
                </div>
            </div>
        </div>
    )
}

export default MobNav;