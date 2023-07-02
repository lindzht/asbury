import { useState } from "react";

function Slideshow ({images, time} ) {

    const [nextIndex, setNextIndex] = useState (0);
    const arrayLength = images.length;

    setTimeout(() => {
        if (nextIndex < arrayLength - 1) {
            setNextIndex(nextIndex + 1);
        } else {
            setNextIndex(0);
        }
      }, time);


    return(
        <div className="slideshow-container"> 
            <img src={images[nextIndex]} alt="Upcoming Show" ></img>   
        </div>
    )
}

export default Slideshow;