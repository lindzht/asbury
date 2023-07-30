import TestimonialCard from "./TestimonialCard";
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from "react-responsive";
import Doug from "../images/dougbiopic.jpg";



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
                    img={Doug} />
            </Fade>
            <Fade bottom>
                <TestimonialCard
                    isDesktop={isDesktop}
                    id={isDesktop? null: "r-card"}
                    name={"Jason Reitman"} 
                    title={"Academy Award nominated Director, Asbury Shorts Concert Guest Host"} 
                    credits={`"JUNO", "Young Adult", "Up in the Air", "Thank You for Smoking"`}
                    quote={"The Best Short Film Show I’ve Ever Seen"}
                    img={Doug} />
            </Fade>
            <Fade right>
                <TestimonialCard 
                    isDesktop={isDesktop}
                    name={"Jason Reitman"} 
                    title={"Academy Award nominated Director, Asbury Shorts Concert Guest Host"} 
                    credits={`"JUNO", "Young Adult", "Up in the Air", "Thank You for Smoking"`}
                    quote={"The Best Short Film Show I’ve Ever Seen"}
                    img={Doug} />
            </Fade>
        </div>
    )
}

export default Testimonials;