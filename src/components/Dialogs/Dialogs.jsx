import React from "react";
import s from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
      <div className={ s.dialog }>
        <NavLink to={`/dialogs/${ props.id }`}>{ props.name }</NavLink>
      </div>
  )
}

const Message = (props) => {
    return (
        <div>{ props.message }</div>
    )
}

const Dialogs = (props) => {

    const dialogsData = [
      {"id": 1, "name": "Ivan"},
      {"id": 2, "name": "Peter"},
      {"id": 3, "name": "Oleg"},
      {"id": 4, "name": "Valera"},
      {"id": 5, "name": "Dima"},
    ]

    const messagesData = [
        {"id": 1, "text": "Hello, Friend"},
        {"id": 2, "text": "How are you?"},
        {"id": 3, "text": "You looks great"},
        {"id": 4, "text": "Thanks, you too"},
    ]

    const dialogElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} ></DialogItem>)
    const messegesElements = messagesData.map( message => <Message message={message.text}></Message>)
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