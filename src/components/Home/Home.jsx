import React from "react";
import Feed from "./Feed/Feed";
import authorAvatar from '../../assets/FrIlya.jpeg'
import whiteLogo from '../../assets/logo_russian.png'
import {Button, Container, Row, Col, Card} from 'react-bootstrap';
import Jumbotron from '../Jumbotron/Jumbotron'
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import s from './Home.module.scss'
import ChildSlide from '../ChildSlide/ChildSlide'

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Home = (props) => {
    return (
        <>
            <Jumbotron/>
            <section className={s.sliderWrapper}>
            <Container>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    // autoplay={{
                    // "delay": 10000,
                    // "disableOnInteraction": false
                    // }}
                    pagination={{
                        el: '.childSlide__pagination',
                        "clickable": true
                    }}
                    navigation={true}
                >
                    {props.homePage.children.map((child) => {
                        return (
                            <SwiperSlide>
                                <ChildSlide child={child}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="childSlide__pagination text-center"></div>
            </Container>
            </section>
            <section className={s.aboutUs}>
            <Container>
                <Row className={'justify-content-center'}>
                    <Col md={6}>
                        <img src={authorAvatar} alt="" width={'600'}/>
                    </Col>
                    <Col md={5}>
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
                        <strong>Протоиерей Илья Лимбергер, <br/>Штутгарт, храм Св. Николая</strong>
                    </Col>
                </Row>
            </Container>
            </section>
            <Feed
              posts={props.homePage.posts}
              newPostText={props.homePage.newPostText}
              dispatch={props.dispatch}
            />
            <section className={s.partnersWrapper}>
                <Container>
                    <p className={'text-center text-secondary fs-1'}>ПАРТЕНЕРЫ</p>
                    <Swiper
                        className={'my-5'}
                        spaceBetween={30}
                        slidesPerView={3}

                        navigation={true}
                    >
                        {props.homePage.partners.map((partner) => {
                            return (
                                <SwiperSlide className={'px-5 text-center'}>
                                    <a href={partner.link}>
                                        <img src={partner.logo} alt="" width={100} height={100}/>
                                    </a>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Container>
            </section>
            <div className="bg-primary">
                <Container>
                    <img src={whiteLogo} alt="" className='mw-100 mx-auto'/>
                    <h2 className={'text-center mb-5'}>СТАТИСТИКА ФОНДА</h2>
                    <Row>
                        <Col className={'d-flex flex-column align-items-center'}>
                            <Card style={{ width: '18rem', border: '1px solid black' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card className={'mt-2'} style={{ width: '18rem', border: '1px solid black' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className={'d-flex flex-column align-items-center'}>
                            <Card style={{ width: '18rem', border: '1px solid black' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card className={'mt-2'} style={{ width: '18rem', border: '1px solid black' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Home