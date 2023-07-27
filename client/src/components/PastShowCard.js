function PastShowCard ( {img, title, date, location, host, time, cost, desc, url} ) {
    return(
        <div className="past-show-card-container">
            <div className="past-show-c-header">
                <img src={img} alt={title} />
                <div id="past-s-c-title">
                    <h2>{date}</h2>
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="past-show-c-desc">
                {host ? <h3>Guest Host: {host}</h3> : null}
                <h4>{location}</h4>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default PastShowCard;