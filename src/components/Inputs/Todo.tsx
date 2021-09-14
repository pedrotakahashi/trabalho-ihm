import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PanelLayout from "../PanelLayout";

const Todo = () => {
  return (
    <PanelLayout>
      <Container className="container-inputs">
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Insira a Atividade</Form.Label>
                <Form.Control type="activity" placeholder="Atividade" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Insira como será a atividade</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button variant="primary" className="mr-2 mt-2">Inserir</Button>
            <Button variant="light" className="mt-2">Limpar</Button>
          </Col>
        </Row>
      </Container>
    </PanelLayout>
  );
};

export default Todo;
