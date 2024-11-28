// import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Navbar,Nav,Button} from 'react-bootstrap'
import Login from './Login';
import { useState } from 'react';
function MyNav() {
    let [showModal,setShowModal]=useState(false);
  return (  
    <Container fluid>
        <Navbar bg='dark' data-bs-theme='dark'>
            <Navbar.Brand>
                Book Store
            </Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link href='/home'>Home</Nav.Link>
                <Nav.Link href='/about'>About Us</Nav.Link>
                <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
            <Navbar.Text className="">
                <Button variant='primary' style={{marginRight:"140px"}} onClick={()=>setShowModal(true)}>
                    Login/SignUp
                </Button>
            </Navbar.Text>
        </Navbar>
        {
            showModal && <Login></Login>
        }

    </Container>
  );
}


export default MyNav
