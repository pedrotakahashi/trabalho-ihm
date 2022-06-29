import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/app.css";
import { Routes } from "./Routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="app-main">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
