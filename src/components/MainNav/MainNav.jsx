import React from "react";
import {Link} from "react-router-dom";
import {Container, Nav, Navbar, Row, Button} from 'react-bootstrap';
import smallLogo from '../../assets/gd-hand-logo.png'

const MainNav = () => {
  return (
    <Navbar fixed="top" expand="lg">
        <Container className="justify-content-start">
            <Navbar.Brand className={'me-4'}>
                <img
                    src={ smallLogo }
                    width="90"
                    height="90"
                    className="d-inline-block align-top"
                    alt=""
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
                <Nav>
                    <Link to={'/dialogs'} className={'nav-link'}>ПОЖЕРТВОВАТЬ</Link>
                    <Link to={'/dialogs'} className={'nav-link'}>МЫ ПОМОГАЕМ</Link>
                    <Link to={'/dialogs'} className={'nav-link'}>КАК ПОМОЧЬ</Link>
                    <Link to={'/dialogs'} className={'nav-link'}>ПОЛЕЗНОЕ</Link>
                    <Link to={'/home'} className={'nav-link'}>О НАС</Link>
                </Nav>
            </Navbar.Collapse>
            <Nav className={'ms-auto'}>
                <Button variant='primary me-2'>ХОЧУ ПОМОЧЬ</Button>
                <Button variant='secondary'>НУЖНА ПОМОЩЬ</Button>
                <div className={'ms-3'}>
                    <Button variant='primary'>RU</Button>
                    <Button variant='primary'>EN</Button>
                    <Button variant='primary'>DE</Button>
                </div>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default MainNav