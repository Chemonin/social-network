import React from "react";
import s from './FeatureCard.module.scss'
import {Button, Card} from "react-bootstrap";
import helpingHand from '../../assets/images/icons/helpingHand.svg';

const FeatureCard = (props) => {
    return (
        <Card className={s.featureCard}>
            <Card.Img variant="top" src={helpingHand} className={s.featureCard_image}/>
            <Card.Body>
                <Card.Title>{props.feature.title}</Card.Title>
                <Card.Subtitle className="mb-2">{props.feature.subtitle}</Card.Subtitle>
                <Card.Text>
                    {props.feature.text}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default FeatureCard