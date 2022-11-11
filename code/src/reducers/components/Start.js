import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Start = () => {
    const { description, actions, coordinates } = useSelector((store) => store.game.currentDirection)
    const dispatch = useDispatch ()

    return (
        <>
        <div className="restart">
                {coordinates === "1,3" ?  (null): <SmallRestart type="button" onClick={onRestartButton}>Restart</SmallRestart>}
        </div>
        </>
    )


export default Start