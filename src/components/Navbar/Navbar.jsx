import React from "react";
import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={ s.nav }>
      <ul>
        <li className={ s.item }><NavLink to="/home" activeClassName={s.active}>Profile</NavLink></li>
        <li className={ s.item }><NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink></li>
        <li className={ s.item }><NavLink to="" activeClassName={s.active}>News</NavLink></li>
        <li className={ s.item }><NavLink to="" activeClassName={s.active} >Music</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar