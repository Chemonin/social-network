import React from "react";
import s from './Header.module.css'
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={ s.header }>
      <div className={ s.container }>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""/>
        <Navbar/>
      </div>
    </header>
  )
}

export default Header