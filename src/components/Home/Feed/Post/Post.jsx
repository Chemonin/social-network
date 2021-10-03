import React from "react";
import s from './Post.module.scss'

const Post = (props) => {
  return (
      <li className={ s.item }>
          <h3>{ props.title }</h3>
          <p>{ props.date }</p>
          <p>{ props.teaser }</p>
      </li>
  )
}

export default Post