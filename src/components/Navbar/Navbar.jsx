import React from "react";
import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={ s.nav }>
      <ul>
        <li className={ s.item }><NavLink to="/home" activeClassName={s.active}>О НАС</NavLink></li>
        <li className={ s.item }><NavLink to="/dialogs" activeClassName={s.active}>КАК ПОМОЧЬ</NavLink></li>
        <li className={ s.item }><NavLink to="/news" activeClassName={s.active}>НАША ЖИЗНЬ</NavLink></li>
        <li className={ s.item }><NavLink to="/music" activeClassName={s.active}>ПОЛЕЗНОЕ</NavLink></li>
        <li className={ s.item }><NavLink to="/music" activeClassName={s.active}>ПОЖЕРТВОВАТЬ</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar