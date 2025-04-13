import { Textfit } from "@aw-web-design/react-textfit"
import React from "react";
import "./Screen.css"

function Screen({value}){
    return (
        <Textfit className="screen" mode="single" max={70} >
            {value}
        </Textfit>
    );
}

export default Screen;