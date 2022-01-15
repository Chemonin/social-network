import React from "react";
import {Link, NavLink} from "react-router-dom";
import {Container, Nav, Navbar, Row, Button} from 'react-bootstrap';
import smallLogo from '../../assets/gd-hand-logo.png'

const MainNav = () => {
  return (
    <Navbar expand="lg">
        <Container className="justify-content-between">
            <Navbar.Brand>
                <img
                    src={ smallLogo }
                    width="130"
                    height="130"
                    className="d-inline-block align-top"
                    alt=""
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
                <Nav className="">
                    <Nav.Link><Link to='/home'>О НАС</Link></Nav.Link>
                    <Nav.Link href="#link"><Link to='/home'>КАК ПОМОЧЬ</Link></Nav.Link>
                    <Nav.Link href="#home"><Link to='/dialogs'>НАША ЖИЗНЬ</Link></Nav.Link>
                    <Nav.Link href="#link"><Link to='/music'>ПОЛЕЗНОЕ</Link></Nav.Link>
                    <Nav.Link href="#link"><Link to='/music'>ПОЖЕРТВОВАТЬ</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav>
                <Button variant='primary'>ХОЧУ ПОМОЧЬ</Button>
                <Button variant='secondary'>НУЖНА ПОМОЩЬ</Button>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default MainNav