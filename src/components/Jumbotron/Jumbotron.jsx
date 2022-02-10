import React from "react";
import s from './Jumbotron.module.scss'
import {Button, Container} from "react-bootstrap";

const Jumbotron = (props) => {
    return (
        <Container>
            <div className={s.jumbotron}>
                <div className={s.jumbotron__text}>
                    <p className={'mb-5'}>
                        Русская Православная Диакония в Европе занимается соединением эффективных современных
                        технологий благотворительности с христианским служением ближнему.
                        Цель — поддержка тяжелобольных детей и взрослых, объединение нуждающихся в помощи и оказывающих
                        помощь,
                        умножение любви и радости в каждом отдельном человеке и в человеческом обществе в целом.
                    </p>
                    <a href="" className={'text-white'}>УЗНАТЬ БОЛЬШЕ <i className="fas fa-arrow-right"></i></a>
                </div>
                <div className={s.jumbotron__photo}>

                </div>
            </div>
        </Container>
    )
}

export default Jumbotron