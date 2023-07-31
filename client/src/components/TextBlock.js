function TextBlock({title, content, img}) {
    return(
        <article className="t-block">
            <div className="t-left">
                <h1>{title}</h1>
                {img ? <div id="t-img" style={{backgroundImage: `url(${img})`}}></div> : null}
            </div>
            <div className="t-right">
                {content}
            </div>
        </article>
    )
}

export default TextBlock;