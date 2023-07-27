import PastShowCard from "./PastShowCard";

function PastShows() {
    return(
        <div id="past-container">
            <h1>Past Shows</h1>
            <PastShowCard 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"
                title="CUNY Graduate Theater"
                date="Aug 18"
                time="7:00PM"
                location="365 Fifth Ave (B/W 34th & 35th Street"
                cost="$25"
                host="Ken Dashow"
                desc="tkt. tktk . tkt tktktktkt .t ktktktktktkt."/>
        </div>
    )
}

export default PastShows;