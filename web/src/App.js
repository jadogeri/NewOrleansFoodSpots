import Routes from "../src/routes/ProjectRoutes"

//import './App.css';

function App() {
  return (
    <Routes /> 
    /*
  import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  useLocation,
  Routes
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./styles.css";

const Home = () => <div className="home">Home Component</div>;
const First = () => <div className="first">First Component</div>;
const Second = () => <div className="second">Second Component</div>;

const AnimatedSwitch = () => {
  const location = useLocation();
  console.log("location", location);
  return (
    <TransitionGroup >
      <CSSTransition  key={location.key} classNames="fade" timeout={2000}>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedSwitch />
        <nav>
          <ul>
            <li>
              <Link to="/">Go to home</Link>
            </li>
            <li>
              <Link to="/first">Go to first</Link>
            </li>
            <li>
              <Link to="/second">Go to second</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </div>
  );
}
    */
  );
}

export default App;
