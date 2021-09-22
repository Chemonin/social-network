import React from "react";
import s from './Footer.module.scss'
import iconVk from "../../assets/images/icons/iconVk.svg"
import Odnoklassnik from "../../assets/images/icons/iconOdnoklassniki.svg"
import iconFB from "../../assets/images/icons/iconFB.svg"
import iconYoutube from "../../assets/images/icons/iconYoutube.svg"
import iconInst from "../../assets/images/icons/iconInst.svg"

const Footer = () => {
  return (
    <div className={ s.footer }>
      <div className={ s.container }>
        <div>
        <a link={"https://www.orthodiakonia.de/de/impressum/"}>Impressum</a>
        <br/>
        <a link={"https://www.orthodiakonia.de/de/datenschutzerklaerung/"}>Datenschutzerklärung</a>
        <p>
          Russisch Orthodoxe Kirchengemeinde Stuttgart
        </p>
        <p>
          IBAN:DE62600501010002645779, BIC: SOLADEST, Zweck: Kinderhilf
        </p>
        </div>
        <div>
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
          <a link={"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DGRDVU2DCUL8C"}>
            PayPal
          </a>
          <br/>
          <a className={ s.footer_btn } link={"http://ticket.orthodiakonia.de"}>Свяжитесь с нами</a>
        </div>
      </div>
    </div>
  )
}

export default Footer