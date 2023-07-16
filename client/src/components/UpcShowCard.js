

function UpcomingShowCard ( {img, title, date, location, host, time, cost, desc, url} ) {
    return(
        <div className="up-show-card-container">
            <div className="up-show-c-header">
                <img src={img} alt={title} />
                <h1>{title}</h1>
            </div>
            <div className="up-show-c-desc">
                {host ? <h3>Guest Host: {host}</h3> : null}
                <h4>{date}</h4>
                <h4>{time}</h4>
                <h4>{cost}</h4>
                <h4><em>{location}</em></h4>
                <p>{desc}</p>
            </div>
            <a href={`${url}`} className="button" alt="Tickets" target="_blank" rel="noreferrer">Tickets</a>
        </div>
    )
}

export default UpcomingShowCard;