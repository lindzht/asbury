import Banner from "./Banner";
import TextBlock from "./TextBlock";
import Doug from "../images/doug_drawing.png";
import poster from "../images/DTAJposter.jpg";


function About () {


    const team = <ul>
                    <li>Title - Name</li>
                    <li>Title - Name</li>
                    <li>Title - Name</li>
                    <li>Title - Name</li>
                    <li>Title - Name</li>
                    <li>Title - Name</li>
                </ul>

    const founderBio = <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </>


    return(
        <div id="about-container">
            <Banner title="About" img={poster} />
            <div id="about-content">
                <TextBlock title="Our History" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                <TextBlock img={Doug} title="Our Founder" content={founderBio} />
                <div id="team-container">
                    <TextBlock title="Our Team" content={team} />
                </div>
            </div>
        </div>
    )
}

export default About;