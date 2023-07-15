import { useState } from "react";

function LandingSlideMob ({images, time} ) {

    const [nextIndex, setNextIndex] = useState (0);
    const arrayLength = images.length;

    const [touchPosition, setTouchPosition] = useState(null)
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    // setTimeout(() => {
    //     if (nextIndex < arrayLength - 1) {
    //         setNextIndex(nextIndex + 1);
    //     } else {
    //         setNextIndex(0);
    //     }
    //   }, time);

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




    return(
        <div className="slideshow-container" 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}> 
                <img src={images[nextIndex]} alt="Upcoming Show" ></img>   
        </div>
    )
}

export default LandingSlideMob;