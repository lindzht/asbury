function TextBlock({title, content, img}) {
    


    return(
        <article className="t-block">
            <div className="t-left">
                {img ? <div id="t-img" style={{backgroundImage: `url(${img})`}}></div> : null}
                <h1>{title}</h1>
            </div>
            <div className="t-right">
                <p>{content}</p>
            </div>
        </article>
    )
}

export default TextBlock;