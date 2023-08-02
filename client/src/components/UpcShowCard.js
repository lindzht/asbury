

function UpcomingShowCard ( {isDesktop, img, title, date, location, host, time, cost, desc, url} ) {
    return(
        <div className="up-show-card-container">
            <div className="up-show-c-header">
                {/* <img src={img} alt={title} /> */}
                <div id="up-s-c-title">
                    <h2>{date}</h2>
                    <h1>{title}</h1>
                </div>
                <div id="up-img" style={{backgroundImage:`url(${img})`}}></div>
            </div>
            <div className="up-show-c-desc">
                {!isDesktop ? null : <a href={`${url}`} id="tix" alt="Tickets" target="_blank" rel="noreferrer">Tickets<span>→</span></a>}
                {host ? <h3>Guest Host: {host}</h3> : null}
                <h4>{time} | {cost}</h4>
                <h4>{location}</h4>
                <p>{desc}</p>
            </div>
            {isDesktop ? null : <a href={`${url}`} className="button" alt="Tickets" target="_blank" rel="noreferrer">Tickets</a>}
        </div>
    )
}

export default UpcomingShowCard;