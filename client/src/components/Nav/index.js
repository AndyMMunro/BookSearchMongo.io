import React from "react";
import { Link } from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap';
import "./styles.css"

class BootstrapNavbar extends React.Component{
  render(){
    
  return(
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Link to="/" className="nav-link">BookSearch</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/Saved" className="nav-link">SavedBooks</Link>
          </Nav.Item>
      </Nav>
    </Navbar>

    );
  }
}
export default BootstrapNavbar;