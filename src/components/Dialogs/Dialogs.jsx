import React from "react";
import s from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    const dialogElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} ></DialogItem>)
    const messegesElements = props.state.messages.map( message => <Message message={message.text}></Message>)
    return (
        <div className={ s.container }>
          <div className={ s.dialogs }>
            <div className={ s.dialogsItems }>
                { dialogElements }
            </div>
            <div className={ s.messages }>
                { messegesElements }
            </div>
          </div>
        </div>
    )
}

export default Dialogs;