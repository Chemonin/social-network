import React from "react";
import s from './Home.module.scss'
import Feed from "./Feed/Feed";
import logo from '../../assets/logo_russian.png'

const Home = () => {
  return (
    <div className={ s.content }>
      <div className={ s.container }>
        <div className={ s.intro }>
          <img src={ logo } alt=""/>
          <p className={ s.intro_text }>
            Русская Православная Диакония в Европе занимается соединением эффективных современных
            технологий благотворительности с христианским служением ближнему.
            Цель — поддержка тяжелобольных детей и взрослых, объединение нуждающихся в помощи и оказывающих помощь,
            умножение любви и радости в каждом отдельном человеке и в человеческом обществе в целом.
          </p>
          <a className={ s.intro_moreBtn } href="">Узнать больше</a>
        </div>
        <div>
          User data
        </div>
        <Feed/>
      </div>
    </div>
  )
}

export default Home