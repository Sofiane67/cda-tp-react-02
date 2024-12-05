import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import classes from "./LikeAndDislike.module.css"
import { useState } from "react"

const LikeAndDislike = () => {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    const likeHandler = () => setLike(like + 1)
    const dislikeHandler = () => setDislike(dislike + 1)

    return (
            <div className={classes["comment-container"]}>
                <p className={classes["comment-text"]}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dolorum sunt tempora explicabo corrupti, nobis excepturi doloremque cumque delectus laborum repellendus laboriosam suscipit natus incidunt nam blanditiis velit fugiat consequuntur!
                </p>
                <div className={classes["btn-group"]}>
                    <div className={classes["btn-box"]}>
                        <p>{like}</p>
                        <button onClick={likeHandler}><FontAwesomeIcon icon={faThumbsUp} /></button>
                    </div>
                    <div className={classes["btn-box"]}>
                        <p>{dislike}</p>
                        <button onClick={dislikeHandler}><FontAwesomeIcon icon={faThumbsDown} /></button>
                    </div>
                </div>
            </div>
    )
}

export default LikeAndDislike