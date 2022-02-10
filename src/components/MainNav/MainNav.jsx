import React from "react";
import {Link} from "react-router-dom";
import {Container, Nav, Navbar, Row, Button, Dropdown} from 'react-bootstrap';
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
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className={'btn btn-outline-primary'}>
                            RU
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">RU</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">EN</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">DE</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default MainNav