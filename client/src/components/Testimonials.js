import TestimonialCard from "./TestimonialCard";
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from "react-responsive";



function Testimonials() {
    const isDesktop = useMediaQuery({query: '(min-width: 992px)'})


    return(
        <div id="testimonials-container">
            <Fade left>
                <TestimonialCard 
                    isDesktop={isDesktop}
                    name={"Jason Reitman"} 
                    title={"Academy Award nominated Director, Asbury Shorts Concert Guest Host"} 
                    credits={`"JUNO", "Young Adult", "Up in the Air", "Thank You for Smoking"`}
                    quote={"The Best Short Film Show I’ve Ever Seen"}
                    img={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"} />
            </Fade>
            <Fade bottom>
                <TestimonialCard
                    isDesktop={isDesktop}
                    id={isDesktop? null: "r-card"}
                    name={"Jason Reitman"} 
                    title={"Academy Award nominated Director, Asbury Shorts Concert Guest Host"} 
                    credits={`"JUNO", "Young Adult", "Up in the Air", "Thank You for Smoking"`}
                    quote={"The Best Short Film Show I’ve Ever Seen"}
                    img={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"} />
            </Fade>
            <Fade right>
                <TestimonialCard 
                    isDesktop={isDesktop}
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