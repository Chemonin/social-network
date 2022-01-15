import React from "react";
import s from './Home.module.scss'
import Feed from "./Feed/Feed";
import authorAvatar from '../../assets/FrIlya.png'
import NikitaN from '../../assets/images/NikitaN.png'
import {Button, Container} from 'react-bootstrap';
import Jumbotron from '../Jumbotron/Jumbotron'

const Home = (props) => {
    return (
        <div>
            <Jumbotron>
                    <p>
                        Русская Православная Диакония в Европе занимается соединением эффективных современных
                        технологий благотворительности с христианским служением ближнему.
                        Цель — поддержка тяжелобольных детей и взрослых, объединение нуждающихся в помощи и оказывающих
                        помощь,
                        умножение любви и радости в каждом отдельном человеке и в человеческом обществе в целом.
                    </p>
                    <Button type={'primary'} view={'btn'} url={'#'}>ПОМОЧЬ</Button>
            </Jumbotron>
            <article className={ s.childernList }>
                <div className={ s.childCard }>
                    <div className={ s.imgWrapp }>
                        <img src={ NikitaN } alt=""/>
                    </div>
                    <div>
                        <p>Возраст: 11лет</p>
                        <p>Место проживания: Брестская область, Беларусь</p>
                        <p>Диагноз: врожденный порок сердца</p>
                        <p>Необходимо: вертикализатор</p>
                        <p>Сумма к сбору: 1500 евро</p>
                        <p>
                            Семья Никиты живет очень скромно, пособия, получаемого от государства,
                            не хватает на приобретение средств реабилитации. Никите необходим вертикализатор.
                            Это устройство, которое помогает телу пациента
                            принимать вертикальное положение. Этот механизм незаменим для детей с диагнозом
                            ДЦП, ведь они проводят много времени в лежачем и сидячем состоянии,
                            что опасно возможностью получить почечную или легочную недостаточность, остеопороз и пролежни.
                            Для приобретения вертикализатора необходимо 1500 евро.
                        </p>
                        <button>ПОЖЕРТВОВАТЬ</button>
                    </div>
                </div>
                <div className={ s.childCard }>
                    <div className={ s.imgWrapp }>
                        <img src={ NikitaN } alt=""/>
                    </div>
                    <div>
                        <p>Возраст: 11лет</p>
                        <p>Место проживания: Брестская область, Беларусь</p>
                        <p>Диагноз: врожденный порок сердца</p>
                        <p>Необходимо: вертикализатор</p>
                        <p>Сумма к сбору: 1500 евро</p>
                        <p>
                            Семья Никиты живет очень скромно, пособия, получаемого от государства,
                            не хватает на приобретение средств реабилитации. Никите необходим вертикализатор.
                            Это устройство, которое помогает телу пациента
                            принимать вертикальное положение. Этот механизм незаменим для детей с диагнозом
                            ДЦП, ведь они проводят много времени в лежачем и сидячем состоянии,
                            что опасно возможностью получить почечную или легочную недостаточность, остеопороз и пролежни.
                            Для приобретения вертикализатора необходимо 1500 евро.
                        </p>
                        <button>ПОЖЕРТВОВАТЬ</button>
                    </div>
                </div>
            </article>
            <article>
                <h2>О нас</h2>
                <p>
                    Чтó пользы, братия мои, если кто говорит, что он имеет веру, а дел не имеет?
                    может ли эта вера спасти его? Если брат или сестра наги и не имеют дневного пропитания,
                    а кто-нибудь из вас скажет им: «идите с миром, грейтесь и питайтесь»,
                    но не даст им потребного для тела: что пользы?
                    Так и вера, если не имеет дел, мертва сама по себе.
                    Но скажет кто-нибудь: «ты имеешь веру, а я имею дела»: покажи мне веру твою без дел твоих,
                    а я покажу тебе веру мою из дел моих.

                    <strong>Иак. 2, 14 – 18</strong>
                </p>
                <p>
                    Уже в течение нескольких лет ряд приходов Русской Православной Церкви в
                    Германии помогают русскоязычным детям и их родителям, которые приезжают в Германию на лечение.
                    Как правило, эти дети тяжело больны, родители – обычно это матери – приезжая со своими детьми
                    в Германию из России, Украины, Белоруссии и других стран бывшего СССР,
                    оказываются в очень стесненных, зачастую невыносимых обстоятельствах,
                    без языка, без доброго совета, без друзей и знакомых.
                    Хотелось бы, чтобы эта инициатива, столь естественная для наших церквей в Германии,
                    продолжала развиваться и распространилась на все приходы обеих Германских епархий.
                    Служение ближним – по-гречески диакония – является естественным продолжением Литургии.
                    Дай Бог, чтобы это делание продолжало находить себе достойных делателей!
                </p>
                <strong>Протоиерей Илья Лимбергер,
                    Штутгарт, храм Св. Николая</strong>
                <div>
                    <img src={authorAvatar} alt=""/>
                </div>
            </article>
            <Feed
              posts={props.homePage.posts}
              newPostText={props.homePage.newPostText}
              dispatch={props.dispatch}
            />
            <article className={ s.partnersList }>
                <h3>СПОНСОРЫ и ПАРТЕНЕРЫ</h3>
                <div className={ s.partnerCard }></div>
                <div className={ s.partnerCard }></div>
                <div className={ s.partnerCard }></div>
                <div className={ s.partnerCard }></div>
            </article>
        </div>
    )
}

export default Home