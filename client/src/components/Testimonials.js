import TestimonialCard from "./TestimonialCard";
import Fade from 'react-reveal/Fade';

function Testimonials() {
    return(
        <div id="testimonials-container">
            <Fade bottom>
                <TestimonialCard 
                    name={"Jason Reitman"} 
                    title={"Academy Award nominated Director, Asbury Shorts Concert Guest Host"} 
                    credits={`"JUNO", "Young Adult", "Up in the Air", "Thank You for Smoking"`}
                    quote={"The Best Short Film Show I’ve Ever Seen"}
                    img={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"} />
            </Fade>
            <Fade bottom>
                <TestimonialCard
                    id="r-card"
                    name={"Jason Reitman"} 
                    title={"Academy Award nominated Director, Asbury Shorts Concert Guest Host"} 
                    credits={`"JUNO", "Young Adult", "Up in the Air", "Thank You for Smoking"`}
                    quote={"The Best Short Film Show I’ve Ever Seen"}
                    img={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"} />
            </Fade>
            <Fade bottom>
            <TestimonialCard 
                name={"Jason Reitman"} 
                title={"Academy Award nominated Director, Asbury Shorts Concert Guest Host"} 
                credits={`"JUNO", "Young Adult", "Up in the Air", "Thank You for Smoking"`}
                quote={"The Best Short Film Show I’ve Ever Seen"}
                img={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"} />
            </Fade>
        </div>
    )
}

export default Testimonials;