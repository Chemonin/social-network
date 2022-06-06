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
            <Col xs={12} xl={6} className={'p-0'}>
                <div style={s} className={'childSlide__photo'}>

                </div>
            </Col>
            <Col xs={12} xl={6} className={'p-5'}>
                <h1 className={'childSlide__name'}>{props.child.name}</h1>
                <div className="row mt-5">
                    <div className="col-6">
                        <div className={'d-flex align-items-center mb-5 gap-2'}>
                            <img src={diagnose} alt="" width={'60'} height={'60'}/>
                            <span>
                                {props.child.diagnose}
                            </span>
                        </div>
                        <div className={'d-flex align-items-center mb-5 gap-2'}>
                            <img src={ location } alt="" width={'60'} height={'60'}/>
                            <span>
                                {props.child.location}
                            </span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={'d-flex align-items-center gap-2'}>
                            <img src={ donate } alt="" width={'60'} height={'60'}/>
                            <span>{props.child.donation_amount}</span>
                        </div>
                    </div>
                </div>
                <Button variant="primary">ПОМОЧЬ</Button>
                <a className={'ms-5'} href="">подробнее о ребенке</a>
            </Col>
        </Row>
    )
}

export default ChildSlide