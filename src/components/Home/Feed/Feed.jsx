import React from "react";
import s from './Feed.module.scss'
import Post from "./Post/Post";

const Feed = () => {
  return (
    <div>
      <h2>Posts</h2>
      <div>
        <h3>New Post</h3>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <button>Add</button>
        <button>Delete</button>
      </div>
      <ul className={ s.posts}>
        <Post message="first post text"/>
        <Post message="one more post text"/>
      </ul>
    </div>
  )
}

export default Feed