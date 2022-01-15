import React from "react";
import s from './Feed.module.scss'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";
import Link from "../../UI/Link/Link";
import {Container, Button} from "react-bootstrap";

const Feed = (props) => {

    const postsElements = props.posts.map( p => <Post teaser={p.teaser} title={p.title} date={p.date}></Post>)
    const newPostElement = React.createRef();

    const addPost = () => {
      props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
      const text = newPostElement.current.value;
      const action = updateNewPostTextActionCreator(text);
      props.dispatch(action)
    }
    return (
        <Container className={"py-5"}>
            <h2 className={'text-center'}>НОВОСТИ</h2>
            <ul className={s.posts}>
                { postsElements }
                <Button type={'primary'} view={'btn'} url={'#'}>ВСЕ СОБЫТИЯ</Button>
            </ul>
            {/*<div>*/}
            {/*    <h3>New Post</h3>*/}
            {/*    <textarea name="" id="" cols="30" rows="5"*/}
            {/*        onChange={ onPostChange}*/}
            {/*        ref={newPostElement} value={ props.newPostText }*/}
            {/*    />*/}
            {/*    <button onClick={ addPost }>Add</button>*/}
            {/*    <button>Delete</button>*/}
            {/*</div>*/}
        </Container>
    )
}

export default Feed