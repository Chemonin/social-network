import React from "react";
import s from './Footer.module.scss'
import iconVk from "../../assets/images/icons/iconVk.svg"
import Odnoklassnik from "../../assets/images/icons/iconOdnoklassniki.svg"
import iconFB from "../../assets/images/icons/iconFB.svg"
import iconYoutube from "../../assets/images/icons/iconYoutube.svg"
import iconInst from "../../assets/images/icons/iconInst.svg"
import Link from "../UI/Link/Link";
import {Container, Nav, Navbar, Row, Button, Dropdown, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <div className={ 'bg-secondary' }>
      <Container className={ 'p-5' }>
        <Row>
          <Col className={'d-flex flex-column align-items-center'}>
            <div className={ s.socialNetworks }>
              <a className={ s.socialBtn } href="">
                <img src={ iconVk } alt=""/>
              </a>
              <a className={ s.socialBtn } href="">
                <img src={ iconFB } alt=""/>
              </a>
              <a className={ s.socialBtn } href="">
                <img src={ iconYoutube } alt=""/>
              </a>
              <a className={ s.socialBtn } href="">
                <img src={ iconInst } alt=""/>
              </a>
              <a className={ s.socialBtn } href="">
                <img src={ Odnoklassnik } alt=""/>
              </a>
            </div>
            <Link view={'default'} type={'light'} url={"#"}>
              PayPal
            </Link>
            <a className={"btn btn-primary mx-auto mt-3"} href="#" role="button">Свяжитесь с нами</a>
          </Col>
          <Col>
            <Link view={'default'} type={'light'} url={"#"}>Impressum</Link>
            <br/>
            <Link view={'default'} type={'light'} url={"#"}>Datenschutzerklärung</Link>
            <p className={'text-white mt-3'}>
              Russisch Orthodoxe Kirchengemeinde Stuttgart
            </p>
            <p className={'text-white'}>
              IBAN:DE62600501010002645779, BIC: SOLADEST, Zweck: Kinderhilf
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer