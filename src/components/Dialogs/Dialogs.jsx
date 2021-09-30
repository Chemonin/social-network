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
  return (
    <div className={ s.container }>
      <div className={ s.dialogs }>
        <div className={ s.dialogsItems }>
         <DialogItem name='Ivan' id='1'/>
         <DialogItem name='Peter' id='2'/>
         <DialogItem name='Oleg' id='3'/>
         <DialogItem name='Valera' id='4'/>
         <DialogItem name='Dima' id='5'/>
        </div>
        <div className={ s.messages }>
          <Message message='Hello, Friend' />
          <Message message='How are you?' />
          <Message message='You looks great' />
          <Message message='Thanks, you too' />

        </div>
      </div>
    </div>
  )
}

export default Dialogs;