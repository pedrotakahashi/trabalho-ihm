import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PanelLayout from "../components/PanelLayout";
interface Task {
  id: number;
  title: string;
  time: number;
  textTask: string;
}
const Todo = () => {
  const [task, setTasks] = useState<Task[]>([]);
  const [titleTask, setTitleTask] = useState("");
  const [textTask, setTextTask] = useState("");
  const [timeTask, setTimeTask] = useState(0);

  function handleCreateNewTask() {
    if (!titleTask) return;

    const newTask = {
      id: Math.random(),
      title: titleTask,
      time: timeTask,
      textTask: textTask,
    };

    setTasks((oldState) => [...oldState, newTask]);
    setTitleTask("");
    setTimeTask(0);
    setTextTask("");

    console.log('titulo:', titleTask);
    console.log('texto', textTask);
  }

  return (
    <PanelLayout>
      <Container className="container-inputs">
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Insira a Atividade</Form.Label>
                <Form.Control
                  type="activity"
                  placeholder="Atividade"
                  onChange={(e) => setTitleTask(e.target.value)}
                  value={titleTask}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Insira Tempo de atividade</Form.Label>
                <Form.Control
                  type="activity"
                  placeholder="Atividade"
                  onChange={(e) => setTimeTask(Number(e.target.value))}
                  value={timeTask}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Insira como será a atividade</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setTextTask(e.target.value)}
                  value={textTask}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button
              variant="primary"
              className="mr-2 mt-2"
              onClick={handleCreateNewTask}
            >
              Inserir
            </Button>
            <Button variant="light" className="mt-2">
              Limpar
            </Button>
          </Col>
        </Row>
      </Container>
    </PanelLayout>
  );
};

export default Todo;
