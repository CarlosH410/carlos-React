import reac from'react'
import '../navbar/navbar.css'

import { Navbar ,Container , Nav , } from 'react-bootstrap';

import {TextField} from '@mui/material'

export default function NombreComponente() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='nav'>
                <Container>
                <Navbar.Brand href="#home">BackStreet</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">inicio</Nav.Link>
                    <Nav.Link href="#features">nosotros</Nav.Link>
                    <Nav.Link href="#pricing">politica de devolucion</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
    )
}