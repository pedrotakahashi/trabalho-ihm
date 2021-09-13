import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Todo = () => {
  return (
    <Container>
      <Row className="justify-content-sm-center justify-content-md-center">
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Insira a Atividade</Form.Label>
              <Form.Control type="email" placeholder="Atividade" />
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
          <Button variant="primary">Inserir Atividade</Button>
          <Button variant="light">Cancelar e Limpar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;
