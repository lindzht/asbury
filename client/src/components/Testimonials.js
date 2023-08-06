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
                    name="Jason Reitman"
                    title="Academy Award nominated Director, Asbury Shorts Concert Guest Host" 
                    credits={`"JUNO", "Young Adult", "Up in the Air", "Thank You for Smoking"`}
                    quote="The Best Short Film Show I’ve Ever Seen"
                    img={Doug} />
            </Fade>
            <Fade bottom>
                <TestimonialCard
                    isDesktop={isDesktop}
                    id={isDesktop? null: "r-card"}
                    name="Edie Falco"
                    title="Emmy and Golden Globe Award Winning Actor, Asbury Shorts Concert Guest Host" 
                    credits={`“Oz” “The Sopranos” “Nurse Jackie”`}
                    quote="A Fun night of cool films. Thanks for asking me to Guest Host!"
                    img={Doug} />
            </Fade>
            <Fade right>
                <TestimonialCard 
                    isDesktop={isDesktop}
                    name="Olympia Dukakis"
                    title="Academy Award Winning Actress, Asbury Shorts Concert Guest Host" 
                    credits={`“Moonstruck”  “Fried Green Tomatoes”`}
                    quote="An Amazing Evening! What fabulous films!"
                    img={Doug} />
            </Fade>
            <Fade left>
                <TestimonialCard 
                    isDesktop={isDesktop}
                    name="Adrian Grenier"
                    title="Actor, Asbury Shorts Concert Guest Host" 
                    credits={`HBO's "Entourage"`}
                    quote="I had fun. Great Selections!"
                    img={Doug} />
            <Fade bottom>
                <TestimonialCard
                    isDesktop={isDesktop}
                    id={isDesktop? null: "r-card"}
                    name="John Turturro"
                    title={"Actor/Director/Producer, Asbury Shorts Concert Guest Host"} 
                    credits={`“O Brother, Where Art Thou?” “The Bronx is Burning”, “The Big Lebowski”`}
                    quote="I wish there were more forums like Asbury for people to see two hours of good films."
                    img={Doug} />
            </Fade>
            </Fade>
        </div>
    )
}

export default Testimonials;