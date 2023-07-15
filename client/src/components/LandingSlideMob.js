import { useState } from "react";
import Icon from "../images/circle_w.png";

function LandingSlideMob ({images, time} ) {

    const [nextIndex, setNextIndex] = useState (0);
    const [touchPosition, setTouchPosition] = useState(null)
    const [imgIcon, setImageIcon] = useState(false);
    
    const arrayLength = images.length;
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition
        if(touchDown === null) {
            return
        }
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
        if (diff > 5) {
            if (nextIndex < arrayLength - 1) {
                setNextIndex(nextIndex + 1);
            } else {
                setNextIndex(0);
            }
        }
        if (diff < -5) {
            if (nextIndex > 0){
                setNextIndex(nextIndex - 1);
            } else {
                setNextIndex(arrayLength - 1);
            }
        }
        setTouchPosition(null)
    }

    const icons = images.map((i) => {
        return(<img id="img-icon" src={Icon} alt="icon" />)
    })




    return(
        <div className="slideshow-container" 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}> 
                <img src={images[nextIndex]} alt="Upcoming Show" ></img> 
                {arrayLength && arrayLength > 0 ? <div id="slide-icons">{icons}</div> : null}
        </div>
    )
}

export default LandingSlideMob;