import './assets/css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './pages/User/Login'
import Home from './pages/Home/Home'
import Fail from './pages/Fail/404'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/loginIn'></Redirect>
          </Route>
          <Route path='/loginIn'>
            <Login></Login>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <Fail></Fail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
