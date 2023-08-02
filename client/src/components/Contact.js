import Banner from "./Banner";
import TextBlock from "./TextBlock";

function Contact () {

    return(
        <div id="contact-container">
            <Banner title="Contact" img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949" />
            <div id="contact-content">
                <TextBlock title="Email" content="dougleclaire54@yahoo.com" />
                <TextBlock title="Phone" content="+1.718.510.6929" />
                <TextBlock id="contact-social" title="Follow Us"  />
                <div id="follow-container">
                    <div id="c-fb">
                        <img alt="Facebook" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"  />
                        <h3>Facebook</h3>
                    </div>
                    <div id="c-ig">
                        <img alt="Instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"  />
                        <h3>Instagram</h3>
                    </div>
                    <div id="c-t">
                        <img alt="Twitter" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"  />
                        <h3>Twitter</h3>
                    </div>
                    <div id="c-li">
                        <img alt="LinkedIn" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949"  />
                        <h3>LinkedIn</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;