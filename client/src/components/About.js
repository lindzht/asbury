import Banner from "./Banner";
import TextBlock from "./TextBlock";
import Doug from "../images/dougbiopic.jpg";


function About () {


    const team = <ul>
                    <li>Title - Name</li>
                    <li>Title - Name</li>
                    <li>Title - Name</li>
                    <li>Title - Name</li>
                    <li>Title - Name</li>
                    <li>Title - Name</li>
                </ul>


    return(
        <div id="about-container">
            <Banner title="About" img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949" />
            <TextBlock title="Our History" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <TextBlock img={Doug} title="Our Founder" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <div id="team-container">
                <TextBlock title="Our Team" content={team} />
            </div>
        </div>
    )
}

export default About;