import { Card, Col, Container, Row } from "react-bootstrap";
import PanelLayout from "../components/PanelLayout";

import imagehome from "../../src/assets/images/homePage.png";
const Home = (): JSX.Element => {
  return (
    <>
      <PanelLayout>
        <Container>
          <Row>
            <Col sm={12} className="content-home">
              <Card style={{ width: "18rem" }} className="card-home">
                <Card.Img variant="top" src={imagehome} className="img-home-page" />
                <Card.Body>
                  <Card.Title>DPYT - Dont Procast Your Training</Card.Title>
                  <Card.Text>
                    O DYPT, é um aplicativo onde você pode fazer uma lista de treinos para você<br />
                    e também cronometrar os seus exercícios.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </PanelLayout>
    </>
  );
};

export default Home;
