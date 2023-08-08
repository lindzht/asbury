
function TestimonialCard({isDesktop, id, name, title, quote, img, credits}) {

    
    
    return(
        
        <article className="tmonial-block" id={img ? "tmonial-img" : null} style={{backgroundImage: `url(${img})`}}>
            <div className="tmonial-header">
                {/* {img ? <div id="tmonial-img" style={{backgroundImage: `url(${img})`}}></div> : null} */}
                {isDesktop ? null : <h1>{name}</h1>}
            </div>
            <div className="tmonial-quote">
                {isDesktop ? <h1>{name}</h1> : null}
                <h3>"{quote}"</h3>
                <h4>{title}</h4>
                {/* <h4>{credits}</h4> */}
            </div>
        </article>
    )
}

export default TestimonialCard;