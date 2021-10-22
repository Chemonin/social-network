import React from "react";
import s from './Feed.module.scss'
import Post from "./Post/Post";

const Feed = (props) => {

    const postsElements = props.posts.map( p => <Post teaser={p.teaser} title={p.title} date={p.date}></Post>)
    const newPostElement = React.createRef();

    const addPost = () => {
      props.addPost(newPostElement.current.value);
    }
    return (
        <div>
            <h2>СОБЫТИЯ</h2>
            <ul className={s.posts}>
                { postsElements }
                <button>ВСЕ СОБЫТИЯ</button>
            </ul>
            <div>
                <h3>New Post</h3>
                <textarea name="" id="" cols="30" rows="5" ref={newPostElement}></textarea>
                <button onClick={ addPost }>Add</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Feed