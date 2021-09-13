import Todo from "./components/Inputs/Todo";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menutopside } from "./components/Navbar/Menutopside";
import './assets/styles/app.css'

const App = () => {
return(
  <div className="app-main">
    <Menutopside />
    <Todo />
  </div>
);
}

export default App;
