import Slideshow from "./Slideshow";
import Testimonials from "./Testimonials";
import LandingSlideMob from "./LandingSlideMob";
import LandingCard from "./LandingCard";
import dadmom from "../images/DadinMum.1.jpg";
import powers from "../images/SuperPowers.jpg";
import punta from "../images/puntacrowd21.jpg";
import pickle from "../images/pickle.jpg";


function LandingPage ({isDesktop}) {
    
    const time = 3000
    const slideshow1 = [
        "https://www.syfy.com/sites/syfy/files/styles/amp_featured_image/public/2019/10/faceoff_cage.jpg?h=ba463b8a",
        "https://i.ytimg.com/vi/diQhM7HLNG8/maxresdefault.jpg",
        "https://s3.crackedcdn.com/phpimages/article/4/0/1/820401.jpg",
    ]

    return(
        <div id="landing-container">
            {isDesktop ? 
            <div id="l-hero-s"> 
                <LandingCard 
                    img={dadmom} 
                    title="CUNY Graduate Theater"
                    date="Aug 18"
                    location="365 Fifth Ave"
                    host="Ken Dashow"    
                    />
                <LandingCard 
                    img={powers} 
                    title="CUNY Graduate Theater"
                    date="Aug 18"
                    location="365 Fifth Ave"
                    host="Ken Dashow"    
                    />
                <LandingCard 
                    img={pickle}
                    title="CUNY Graduate Theater"
                    date="Aug 18"
                    location="365 Fifth Ave"
                    host="Ken Dashow"    
                    />
                <LandingCard 
                    img="https://www.syfy.com/sites/syfy/files/styles/amp_featured_image/public/2019/10/faceoff_cage.jpg?h=ba463b8a" 
                    title="CUNY Graduate Theater"
                    date="Aug 18"
                    location="365 Fifth Ave"
                    host="Ken Dashow"    
                    />
            </div> 
            :  
            <div id="l-hero-s"> 
                <LandingSlideMob 
                    images={slideshow1} 
                    time={time}/>
            </div>}
            
            <div id="landing-about">
                <h2>Asbury Shorts USA</h2>
                <div id="l-a-t">
                    <h3>Asbury Shorts USA</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    {isDesktop? 
                    <div id="land-img-row">
                        <div style={{backgroundImage: `url(${dadmom})`}}></div>
                        <div style={{backgroundImage: `url(${punta})`}}></div>
                        <div style={{backgroundImage: `url(${powers})`}}></div>
                    </div>   
                    : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949" alt="placeholder" />}
                </div>
            </div>

            <Testimonials />

            
            <div id="mailing-list-container">
                <h2>Join our Mailing List</h2>
                <h4>Sign up below and receive upcoming show announcements, opportunities, and more straight to your inbox.</h4>
                <form>
                    <label for="" ></label>
                    <input type="text" id="email" name="email" placeholder="Email"/>
                    <input type="submit" value="Submit" />
                </form>  
            </div> 

            
        </div>
    )
}

export default LandingPage;