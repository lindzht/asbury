import TextBlock from "./TextBlock";
import Banner from "./Banner";
import Fade from 'react-reveal/Fade';
import powers from "../images/SuperPowers.jpg";

function Sponsors() {
    return(
        <div id="sponsor-container">
            <Banner title="Sponsorship" img={powers} />
            <div id="sponsor-content">
                <h2 className="sub-header">Support Asbury Shorts USA</h2>
                <TextBlock title="Why Sponsor?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                <Fade bottom>
                    <TextBlock title="Prerequisites" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                </Fade>
                <Fade bottom>
                    <TextBlock title="How To Request" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                </Fade>
                <Fade bottom>
                    <div id="sp-tb">
                        <table>
                            <tr>
                                <th>Option 1</th>
                                <th>Option 2</th>
                                <th>Option 3</th>
                            </tr>
                            <tr>
                                <td>Details</td>
                                <td>Details</td>
                                <td>Details</td>
                            </tr>
                            <tr>
                                <td>$100</td>
                                <td>$500</td>
                                <td>$1000</td>
                            </tr>
                        </table>
                    </div>
                </Fade>
            </div>

            
        </div>
    )
}

export default Sponsors;