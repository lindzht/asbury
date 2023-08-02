function TextBlock({title, content, img}) {
    


    return(
        <article className="t-block">
            <div className="t-left">
                <h1>{title}</h1>
            </div>
            <div className="t-right">
                <p>{content}</p>
                {/* {img ? <div id="t-img" style={{backgroundImage: `url(${img})`}}></div> : null} */}
            </div>
        </article>
    )
}

export default TextBlock;