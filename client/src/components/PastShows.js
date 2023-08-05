import PastShowCard from "./PastShowCard";
import Banner from "./Banner";
import poster from "../images/theater_light.jpg";
import { useState } from "react";


function PastShows() {
    const [year, setYear] = useState("");

    return(
        <div id="past-container">
            <Banner title="Past Shows" img={poster} />
            <div id="past-years">
                <h3>2023</h3>
                <h3>2022</h3>
                <h3>2021</h3>
            </div>
            <PastShowCard 
                id="2023"
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"
                title="CUNY Graduate Theater"
                date="Aug 18"
                time="7:00PM"
                location="365 Fifth Ave (B/W 34th & 35th Street"
                cost="$25"
                host="Ken Dashow"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <PastShowCard 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"
                title="CUNY Graduate Theater"
                date="Aug 18"
                time="7:00PM"
                location="365 Fifth Ave (B/W 34th & 35th Street"
                cost="$25"
                host="Ken Dashow"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <PastShowCard 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"
                title="CUNY Graduate Theater"
                date="Aug 18"
                time="7:00PM"
                location="365 Fifth Ave (B/W 34th & 35th Street"
                cost="$25"
                host="Ken Dashow"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <PastShowCard 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"
                title="CUNY Graduate Theater"
                date="Aug 18"
                time="7:00PM"
                location="365 Fifth Ave (B/W 34th & 35th Street"
                cost="$25"
                host="Ken Dashow"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <PastShowCard 
                id="2022"
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"
                title="CUNY Graduate Theater"
                date="Aug 18"
                time="7:00PM"
                location="365 Fifth Ave (B/W 34th & 35th Street"
                cost="$25"
                host="Ken Dashow"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <PastShowCard 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"
                title="CUNY Graduate Theater"
                date="Aug 18"
                time="7:00PM"
                location="365 Fifth Ave (B/W 34th & 35th Street"
                cost="$25"
                host="Ken Dashow"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        </div>
    )
}

export default PastShows;