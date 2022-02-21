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
        <Container className={"py-5 d-flex flex-column "}>
            <p className={'text-center text-secondary fs-1'}>НОВОСТИ</p>
            <ul className={ s.posts + ' row justify-content-between'}>
                { postsElements }
            </ul>
            <a className={"btn btn-primary mx-auto"} href="#" role="button">ВСЕ СОБЫТИЯ</a>
        </Container>
    )
}

export default Feed