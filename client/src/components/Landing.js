import Slideshow from "./Slideshow";


function LandingPage () {
    
    const time = 3000
    const slideshow1 = [
        "https://www.syfy.com/sites/syfy/files/styles/amp_featured_image/public/2019/10/faceoff_cage.jpg?h=ba463b8a",
        "https://i.ytimg.com/vi/diQhM7HLNG8/maxresdefault.jpg",
        "https://s3.crackedcdn.com/phpimages/article/4/0/1/820401.jpg",
    ]

    return(
        <div id="landing-container">
            <div id="l-hero-s"> <Slideshow images={slideshow1} time={time}/></div>
            
            <div id="landing-about">
                <h2>Asbury Shorts USA</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949" alt="placeholder" />
            </div>

            <Slideshow images={slideshow1} time={time}/>

            <button type="button" className="btn">Join Our Mailing List</button>

            
        </div>
    )
}

export default LandingPage;