import PanelLayout from "../components/PanelLayout";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";

const User = () => {
  return (
    <PanelLayout>
      <Container>
        <Row className="mt-3">
          <Col>
            <ListGroup>
              <ListGroup.Item>Atividade: Musculação</ListGroup.Item>
              <ListGroup.Item>Resumo: Treino de Peito</ListGroup.Item>
              <ListGroup.Item>Tempo: 20 min</ListGroup.Item>
            </ListGroup>
            <br />
            <ListGroup>
              <ListGroup.Item>Atividade: Musculação</ListGroup.Item>
              <ListGroup.Item>Resumo: Treino de Triceps</ListGroup.Item>
              <ListGroup.Item>Tempo: 20 min</ListGroup.Item>
            </ListGroup>
            <br />
            <ListGroup>
              <ListGroup.Item>Atividade: Lutas</ListGroup.Item>
              <ListGroup.Item>Resumo: Judô</ListGroup.Item>
              <ListGroup.Item>Tempo: 60 min</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </PanelLayout>
  );
};

export default User;
