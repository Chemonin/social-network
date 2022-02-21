import React from "react";
import s from './Post.module.scss'

const Post = (props) => {
  return (
      <li className={ s.post + ' col-4'}>
          <img
              className={'w-100 mb-3'}
              src="https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" alt=""/>
          <h5 className={'text-primary m-0 mb-1'}>{ props.title }</h5>
          <p>{ props.date }</p>
          <p>{ props.teaser }</p>
      </li>
  )
}

export default Post