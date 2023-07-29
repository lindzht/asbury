import { Link } from "react-router-dom";


function LandingCard ({img, title, date, location, host, time, cost, desc, url}) {
    return(
        <div className="landcard-container">
            <div className="landcard-content" style={{backgroundImage: `url(${img})`}}>
                {/* <img src={img} alt={title} /> */}
                <Link to="/upcoming">
                    <div id="landcard-title">
                        <h2>{date}</h2>
                        <h1>{title}</h1>
                        <h3>{location}</h3>
                        {host ? <h3>Guest Host: {host}</h3> : null}                                  
                    </div>
                </Link>
            </div>
        </div>
    )

}

export default LandingCard;