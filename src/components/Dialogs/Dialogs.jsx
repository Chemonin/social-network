import React from "react";
import s from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  const dialogElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} ></DialogItem>)
    const messegesElements = props.state.messages.map( message => <Message message={message.text}></Message>)

    const newMessageElement = React.createRef();

    const addMessage = () => {
      alert(newMessageElement.current.value);
    }
    return (
        <div className={ s.container }>
          {/*<div className={ s.dialogs }>*/}
          {/*  <div className={ s.dialogsItems }>*/}
          {/*      { dialogElements }*/}
          {/*  </div>*/}
          {/*  <div className={ s.messages }>*/}
          {/*    <div>*/}
          {/*      { messegesElements }*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <h3>New message</h3>*/}
          {/*      <textarea name="" id="" cols="30" rows="5" ref={newMessageElement}></textarea>*/}
          {/*      <button onClick={ addMessage }>Add</button>*/}
          {/*      <button>Delete</button>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
    )
}

export default Dialogs;