import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import donate from '../../assets/images/icons/donate.svg'
import diagnose from '../../assets/images/icons/diagnose.svg'
import location from '../../assets/images/icons/location.svg'

const ChildSlide = (props) => {
    const s = {
        backgroundImage: `url(${props.child.photo})`,
    }
    return (
        <Row className={"childSlide"}>
            <Col className={'p-0'}>
                <div style={s} className={'childSlide__photo'}>

                </div>
            </Col>
            <Col className={'p-5'}>
                <h1 className={'childSlide__name'}>{props.child.name}</h1>
                <p>
                    <img src={diagnose} alt="" width={'60'} height={'60'}/>
                    {props.child.diagnose}
                </p>
                <p>
                    <img src={ donate } alt="" width={'60'} height={'60'}/>
                    {props.child.donation_amount}
                </p>
                <p>
                    <img src={ location } alt="" width={'60'} height={'60'}/>
                    {props.child.location}
                </p>
                <Button variant="primary">ПОМОЧЬ</Button>
                <a className={'ms-5'} href="">подробнее о ребенке</a>
            </Col>
        </Row>
    )
}

export default ChildSlide