import s from "./../Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";

const Message = (props) => {
    return (
        <div>{ props.message }</div>
    )
}

export default Message;