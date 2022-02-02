import React from "react";
import {Button, Col, Row} from "react-bootstrap";

const ChildSlide = (props) => {
    return (
        <Row className={"childSlide"}>
            <Col>
                <img src={props.child.photo} alt=""/>
            </Col>
            <Col>
                <p>{props.child.name}</p>
                <p>{props.child.age}</p>
                <p>
                    <i className="fas fa-book-medical"></i>
                    {props.child.donation_amount}
                </p>
                <Button variant="primary">ПОМОЧЬ</Button>
            </Col>
        </Row>
    )
}

export default ChildSlide