// import logo from './logo.svg';
import Xin from './assets/images/xiaoxin.jpg'
import { Button } from 'antd';
import './assets/css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthExample from './AuthExample'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={Xin} className="App-logo" alt="logo" />
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Test
    //     </a>
    //     <Button type="primary">Button</Button>
    //   </header>
    // </div>
    // <Router>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/dashboard">Dashboard</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <hr></hr>
    //   <Switch>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/about">
    //       <About />
    //     </Route>
    //     <Route path="/dashboard">
    //       <Dashboard />
    //     </Route>
    //   </Switch>
    // </Router>
    <AuthExample></AuthExample>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
