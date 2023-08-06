import PastShowCard from "./PastShowCard";
import Banner from "./Banner";
import poster from "../images/theater_light.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


function PastShows() {
    const [year, setYear] = useState("");

    return(
        <div id="past-container">
            <Banner title="Past Shows" img={poster} />
            <div id="past-years">
                <HashLink smooth to="/past/#2023">
            	2023
                </HashLink>
                <HashLink smooth to="/past/#2022">
            	2022
                </HashLink>
                <HashLink smooth to="/past/#2021">
            	2021
                </HashLink>    
            </div>

            <PastShowCard 
                year="2023"
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
                year="2022"
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
                year="2021"
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"
                title="CUNY Graduate Theater"
                date="Aug 18"
                time="7:00PM"
                location="365 Fifth Ave (B/W 34th & 35th Street"
                cost="$25"
                host="Ken Dashow"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <PastShowCard 
                year="2021"
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"
                title="CUNY Graduate Theater"
                date="Aug 18"
                time="7:00PM"
                location="365 Fifth Ave (B/W 34th & 35th Street"
                cost="$25"
                host="Ken Dashow"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <PastShowCard 
                year="2021"
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"
                title="CUNY Graduate Theater"
                date="Aug 18"
                time="7:00PM"
                location="365 Fifth Ave (B/W 34th & 35th Street"
                cost="$25"
                host="Ken Dashow"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <PastShowCard 
                year="2021"
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