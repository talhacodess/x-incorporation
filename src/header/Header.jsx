import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo1 from '../assets/x.png'
import sidebarLogo from '../assets/sidebar-x.png'
import '../styles/Header.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router';


function Header() {
  const [changeColor,setChangeColor] = useState(false);
  console.log(changeColor,"color");
  
useEffect(()=>{
  const handleChange = ()=>{
    if(window.scrollY >100){

    setChangeColor(true)
  }else{
    setChangeColor(false)
  }
  }
  window.addEventListener('scroll',handleChange)
  return ()=>window.removeEventListener('scroll',handleChange)

},[])
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className={`fixed-top nav-main mb-3   ${changeColor? 'nabarscrolled' : ''}`}>
          <Container >
            <Navbar.Brand > <Link to={'/'}> <img src={Logo1} alt="x-Incorporation"  height={100} /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <Link to={'/'}> <img src={sidebarLogo} className=' w-75' alt="" /></Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link  href="#Our-Story" aria-label="Close">Our Story X-Incorporation</Nav.Link>
                  <Nav.Link href="#Employment-Opportunities">Employment Opportunities</Nav.Link>
                  <Nav.Link href="#CEO-Message">CEO Message</Nav.Link>
                  <Nav.Link href="#Contact-US">Contact US</Nav.Link>
              
                </Nav>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;