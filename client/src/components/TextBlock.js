function TextBlock({title, content, img}) {
    return(
        <article className="t-block">
            <div className="t-left">
                <h1>{title}</h1>
                {img ? <img src={img} alt="test"/> : null}
            </div>
            <div className="t-right">
                {content}
            </div>
        </article>
    )
}

export default TextBlock;