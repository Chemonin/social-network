import React from "react";
import s from './Dialogs.module.scss'

const Dialogs = (props) => {
  return (
    <div className={ s.container }>
      <div className={ s.dialogs }>
        <div className={ s.dialogsItems }>
          <div className={ s.dialog }>Ivan</div>
          <div className={ s.dialog }>Peter</div>
          <div className={ s.dialog }>Oleg</div>
          <div className={ s.dialog }>Mikhail</div>
          <div className={ s.dialog }>Alexey</div>
          <div className={ s.dialog }>Konstantin</div>
        </div>
        <div className={ s.messages }>
          <div>Hello</div>
          <div>How are you?</div>
          <div>You looks great</div>
          <div>Thanks, you too</div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;