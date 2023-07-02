import Banner from "./Banner";
import TextBlock from "./TextBlock";

function Contact () {

    const socialIcons = <>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949" alt="Facebook" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949" alt="Instagram" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949" alt="Twitter" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949" alt="LinkedIn" />
                        </>


    return(
        <div id="contact-container">
            <Banner title="Contact" img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949" />
            <TextBlock title="Email" content="dougleclaire54@yahoo.com" />
            <TextBlock title="Phone" content="+1.718.510.6929" />
            <TextBlock id="contact-social" title="Follow Us" content={socialIcons} />
        </div>
    )
}

export default Contact;