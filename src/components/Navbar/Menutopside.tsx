import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/images/icon.png";
export const Menutopside = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} className="topside-logo d-inline-block align-top" /> React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>
);
