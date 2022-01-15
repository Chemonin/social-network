import React from "react";
import Feed from "./Feed/Feed";
import authorAvatar from '../../assets/FrIlya.png'
import {Button, Container, Row, Col} from 'react-bootstrap';
import Jumbotron from '../Jumbotron/Jumbotron'
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

SwiperCore.use([Pagination, Navigation, Autoplay]);

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
            <Container className='py-5'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    "delay": 10000,
                    "disableOnInteraction": false
                    }}
                    pagination={{
                    "clickable": true
                    }}
                    navigation={true}
                >
                    {props.homePage.children.map((child) => {
                        return (
                            <SwiperSlide>
                                <Row className='w-75 mx-auto'>
                                    <Col>
                                        <img src={child.photo} alt=""/>
                                    </Col>
                                    <Col>
                                        <p>{child.name}</p>
                                        <p>{child.age}</p>
                                        <p>{child.donation_amount}</p>
                                        <Button variant="primary">ПОМОЧЬ</Button>
                                    </Col>
                                </Row>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Container>
            <Container>
                <h2 className='text-center'>О нас</h2>
                <Row>
                    <Col md={5}>
                        <img src={authorAvatar} alt=""/>
                    </Col>
                    <Col md={7}>
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
                        <strong>Протоиерей Илья Лимбергер, Штутгарт, храм Св. Николая</strong>
                    </Col>
                </Row>
            </Container>
            <Feed
              posts={props.homePage.posts}
              newPostText={props.homePage.newPostText}
              dispatch={props.dispatch}
            />
            <Container>
                <h3 className={'text-center'}>ПАРТЕНЕРЫ</h3>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={2}
                    pagination={{
                        "clickable": true
                    }}
                    navigation={true}
                >
                    {props.homePage.partners.map((partner) => {
                        return (
                            <SwiperSlide>
                                <a href={partner.link}>
                                    <img src={partner.logo} alt="" width={300} height={300}/>
                                </a>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Container>
        </div>
    )
}

export default Home