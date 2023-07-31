

function Banner ({img, title}) {
    return(
        <div className="banner" >
            <div className="b-img" style={{backgroundImage: `url(${img})`}}></div>
            <h1>{title}</h1>
        </div>
    )
}

export default Banner;