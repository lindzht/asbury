import { useMediaQuery } from 'react-responsive'


function PastShowCard ( {year, img, title, date, location, host, time, cost, desc, url} ) {
    const isDesktop = useMediaQuery({query: '(min-width: 992px)'})


if (!isDesktop){   
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
    )}

else {
    return(
        <div className="past-show-card-container" id={year}>
            <img src={img} alt={title} />
            <h1>{title}</h1>
            <div id="p-details">
                {host ? <h3>Guest Host: {host}</h3> : null}
                <h3>{date}</h3>
                <h4>{location}</h4>
            </div>
            <p>{desc}</p>
        </div>
    )
}
    
}

export default PastShowCard;