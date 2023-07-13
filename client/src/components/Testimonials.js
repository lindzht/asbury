import TestimonialCard from "./TestimonialCard";

function Testimonials() {
    return(
        <div id="testimonials-container">
            <TestimonialCard 
                name={"Jason Reitman"} 
                title={"Academy Award nominated Director, Asbury Shorts Concert Guest Host"} 
                credits={`"JUNO", "Young Adult", "Up in the Air", "Thank You for Smoking"`}
                quote={"The Best Short Film Show I’ve Ever Seen"}
                img={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"} />
            <TestimonialCard
                id={"r-card" }
                name={"Jason Reitman"} 
                title={"Academy Award nominated Director, Asbury Shorts Concert Guest Host"} 
                credits={`"JUNO", "Young Adult", "Up in the Air", "Thank You for Smoking"`}
                quote={"The Best Short Film Show I’ve Ever Seen"}
                img={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"} />
            <TestimonialCard 
                name={"Jason Reitman"} 
                title={"Academy Award nominated Director, Asbury Shorts Concert Guest Host"} 
                credits={`"JUNO", "Young Adult", "Up in the Air", "Thank You for Smoking"`}
                quote={"The Best Short Film Show I’ve Ever Seen"}
                img={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"} />
        </div>
    )
}

export default Testimonials;