import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import classes from "./Diaporama.module.css"

const Diaporama = () => {
    const images = [
        "https://cdn.pixabay.com/photo/2019/06/24/19/15/sea-4296705_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/09/27/15/28/usa-2792396_1280.jpg",
        "https://cdn.pixabay.com/photo/2019/02/28/17/51/winter-4026451_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/08/20/11/39/sunset-2661413_1280.jpg"
      ];
    
      const [currentImage, setCurrentImage] = useState(0)
    
      const nextImageHandler = () => {
        if(currentImage == images.length - 1){
            setCurrentImage(0)
        }else if(currentImage >= 0){
            setCurrentImage(currentImage + 1)
        }
      }
    
      const prevImageHandler = () => {
        if(currentImage == 0){
            setCurrentImage(images.length - 1)
        }else if(currentImage <= images.length - 1){
            setCurrentImage(currentImage - 1)
        }
      }
    return (
   
        <div className={classes.diaporama}>
            <div className={classes["diaporama-image-container"]}>
                <img src={images[currentImage]} className={classes["diaporama-image"]}/>
            </div>
            {/* <div className={classes["btn-box"]}> */}
                <button className={`${classes.btn} ${classes["btn-prev"]}`} onClick={prevImageHandler}><FontAwesomeIcon icon={faArrowLeft} /></button>
                <button className={`${classes.btn} ${classes["btn-next"]}`} onClick={nextImageHandler}><FontAwesomeIcon icon={faArrowRight} /></button>
            {/* </div> */}
        </div>
    )
}

export default Diaporama