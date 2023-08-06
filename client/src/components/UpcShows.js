import UpcomingShowCard from "./UpcShowCard";
import Fade from 'react-reveal/Fade';
import Banner from "./Banner";
import poster from "../images/filmstill.jpg";


function UpcomingShows({isDesktop}) {

    //{img, title, date, time, location, cost, host, desc, url}


    
    const testDesc = <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </>



    return(
        <div id="upcoming-container">
            <Banner title="Upcoming Shows" img={poster} />

          
            <UpcomingShowCard 
                isDesktop={isDesktop}
                img={poster}
                title="CUNY Graduate Theater"
                date="Aug 18"
                time="7:00PM"
                location="365 Fifth Ave (B/W 34th & 35th Street)"
                cost="$25"
                host="Ken Dashow"
                desc={testDesc}
                url="https://bpt.me/5763465"/>
           
            <Fade bottom>
                <UpcomingShowCard 
                    isDesktop={isDesktop}
                    img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"
                    title="CUNY Graduate Theater"
                    date="Aug 18"
                    time="7:00PM"
                    location="365 Fifth Ave (B/W 34th & 35th Street)"
                    cost="$25"
                    host="Ken Dashow"
                    desc={testDesc}
                    url="https://bpt.me/5763465"/>
            </Fade>
            <Fade bottom>
                <UpcomingShowCard 
                    isDesktop={isDesktop}
                    img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"
                    title="CUNY Graduate Theater"
                    date="Aug 18"
                    time="7:00PM"
                    location="365 Fifth Ave (B/W 34th & 35th Street)"
                    cost="$25"
                    host="Ken Dashow"
                    desc={testDesc}/>
            </Fade>
            <Fade bottom>
                <UpcomingShowCard 
                    isDesktop={isDesktop}
                    img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"
                    title="CUNY Graduate Theater"
                    date="Aug 18"
                    time="7:00PM"
                    location="365 Fifth Ave (B/W 34th & 35th Street)"
                    cost="$25"
                    host="Ken Dashow"
                    desc={testDesc}/>
            </Fade>

        </div>
    )
}

export default UpcomingShows;