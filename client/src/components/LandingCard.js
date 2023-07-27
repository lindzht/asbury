import { Link } from "react-router-dom";


function LandingCard ({img, title, date, location, host, time, cost, desc, url}) {
    return(
        <div className="landcard-container">
            <div className="landcard-header">
                <img src={img} alt={title} />
                <div id="landcard-title">
                    <h1>{title}</h1>
                    <h2>{date}</h2>
                </div>
            </div>
            <div className="landcard-desc">
                {host ? <h3>Guest Host: {host}</h3> : null}
                <Link to="/upcoming">
                    <h3>More Information</h3>
                </Link>
            </div>
        </div>
    )

}

export default LandingCard;