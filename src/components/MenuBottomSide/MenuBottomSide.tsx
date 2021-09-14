import { Container, Nav, Navbar } from "react-bootstrap";
import { BsPeopleCircle } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { RiTodoFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
const MenuBottomSide = () => {
 
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" className="navBarbottom">
      <Container>
        <Nav className="nav-bottom-container">
          <Nav.Link href="/">
            <FaHome size={30} className="nav-bottom-icon" />
          </Nav.Link>
          <Nav.Link href="/todo">
            <RiTodoFill size={30} className="nav-bottom-icon" />
          </Nav.Link>
          <Nav.Link href="/cronometer">
            <IoIosTimer size={30} className="nav-bottom-icon" />
          </Nav.Link>
          <Nav.Link href="/user">
            <BsPeopleCircle size={30} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MenuBottomSide;
