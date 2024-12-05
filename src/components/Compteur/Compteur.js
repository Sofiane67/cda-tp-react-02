import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import classes from "./Compteur.module.css"

const Compteur = () => {
    const [number, setNumber] = useState(0)

    const increaseHandler = () => setNumber(number + 1)
    const dicreaseHandler = () => setNumber(number - 1)

    return (
        <div className={classes.compteur}>
            <div className={classes.number}>{number}</div>
            <div className={classes["btn-box"]}>
                <button className={classes.btn} onClick={dicreaseHandler}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <button className={classes.btn} onClick={increaseHandler}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )
}

export default Compteur