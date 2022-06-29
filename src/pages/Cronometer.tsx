import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PanelLayout from "../components/PanelLayout";

const SECONDS_DEFAULT = 60;

const Cronometer = () => {
  const [seconds, setSeconds] = useState(SECONDS_DEFAULT);
  const [timer, setTimer] = useState<any>();

  const secondsToMinutes = (secs: number) => {
    const divisorMinute = secs % 3600;
    const minutes = Math.floor(divisorMinute / 60);
    const seconds = Math.floor(divisorMinute % 60);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  const startTimer = () => {
    const timerInterval = setInterval(() => {
      setSeconds((previousSecods) => {
        if (previousSecods === 0) {
          clearInterval(timerInterval);
          return 0;
        }

        return previousSecods - 1;
      });
    }, 1000);
    setTimer(timerInterval);
  };

  const handlePauseTimer = () => {
    clearInterval(timer);
    setTimer(undefined);
  };

  const handleStopTimer = () => {
    handlePauseTimer();
    setSeconds(SECONDS_DEFAULT);
  };

  const handleRestartTimer = () => {
    setSeconds(SECONDS_DEFAULT);
  };

  return (
    <PanelLayout>
      <Container>
        <Row className="mt-4">
          <Col xs={5}>
            <Form.Group className="mb-3">
              <Form.Label>Tempo de atividade</Form.Label>
              <Form.Control
                type="activity"
                placeholder="Atividade"
                onChange={(e) => setSeconds(Number(e.target.value))}
                value={seconds}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="timer">
              <h2>{secondsToMinutes(seconds)}</h2>
            </div>

            <div className="container-buttons">
              <Button onClick={startTimer} variant={"primary"}>
                Start
              </Button>
              <Button onClick={handlePauseTimer} variant={"secondary"}>
                Pause
              </Button>
              <Button onClick={handleStopTimer} variant={"success"}>
                Stop
              </Button>
              <Button onClick={handleRestartTimer} variant={"warning"}>
                Restart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </PanelLayout>
  );
};
export default Cronometer;
