'use client';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../../public/GREEN-01.png";
import { usePathname } from 'next/navigation';

function NavbarNav() {
    const pathname = usePathname();

    return (
        <>
            <Navbar bg="white" expand="lg" className='sticky top-0 bg-white z-10'>
                <Container className='flex justify-between items-center'>
                    <Navbar.Brand href="#home">
                        <Image src={logo} width={150} height={100} alt='' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto px-3">
                            <Nav.Link href="" className={`mr-2 uppercase ${pathname === '/' ? 'active font-semibold' : ''}`}>Home</Nav.Link>
                            <Nav.Link href="" className='mr-2 uppercase'>Category</Nav.Link>
                            <Nav.Link href="" className='mr-2 uppercase'>About</Nav.Link>
                            <Nav.Link href="" className='mr-2 uppercase'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarNav;