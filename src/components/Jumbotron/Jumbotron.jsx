import React from "react";
import s from './Jumbotron.module.scss'
import {Container} from "react-bootstrap";

const Jumbotron = (props) => {
    return (
        <div className={s.jumbotron}>
            <Container>
                {props.children}
            </Container>
        </div>
    )
}

export default Jumbotron