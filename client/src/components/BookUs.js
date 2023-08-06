import Banner from "./Banner";
import TextBlock from "./TextBlock";
import Fade from 'react-reveal/Fade';
import crowd from "../images/puntacrowd.jpg";



function BookUs () {
    return(
        <div id="book-container">
            <Banner title="Book Us" img={crowd} />
            <div id="book-content">
                <h2 className="sub-header">Bring Asbury Shorts to your city! </h2>

                
                <TextBlock title="What We Bring" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                
                <Fade bottom>
                    <TextBlock title="Prerequisites" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                </Fade>
                <Fade bottom>
                    <TextBlock title="How To Request" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                </Fade>
            </div>
        </div>
    )
}

export default BookUs;