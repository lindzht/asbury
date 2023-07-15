function TestimonialCard({id, name, title, quote, img, credits}) {
    return(
        <article className="tmonial-block" id={id? "r-card" : null}>
            <div className="tmonial-header">
                {img ? <img src={img} alt="test"/> : null}
                <h1>{name}</h1>
            </div>
            <div className="tmonial-quote">
                <h3>{quote}</h3>
                <h4>{title}</h4>
                {/* <h4>{credits}</h4> */}
            </div>
        </article>
    )
}

export default TestimonialCard;