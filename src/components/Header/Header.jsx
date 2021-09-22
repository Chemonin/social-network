import React from "react";
import s from './Header.module.scss'
import Navbar from "../Navbar/Navbar";
import smallLogo from '../../assets/gd-hand-logo.png'

const Header = () => {
  return (
    <header className={ s.header }>
      <div className={ s.container }>
        <img src={ smallLogo } alt=""/>
        <Navbar/>
      </div>
    </header>
  )
}

export default Header