import "./assets/css/App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/User/Login";
import YLayout from "./pages/YLayout/YLayout";
import Home from "./pages/Home/Home";
import Test1 from "./pages/test/Test1";
import Test2 from "./pages/test/Test2.tsx";
import Fail from "./pages/Fail/404";

function App() {
	return (
		<div>
			<Router>
				<Switch>
          <Route exact path='/'>
            <Redirect to='/login'></Redirect>
          </Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route
						path="/home"
						render={({ history, location, match }) => (
							<YLayout history={history} location={location} match={location}>
                <Route exact path="/home" component={Home}></Route>
                <Route path="/home/test1" component={Test1}></Route>
                <Route path="/home/test2" component={Test2}></Route>
              </YLayout>
						)}
					>
          </Route>
					<Route path="*">
						<Fail></Fail>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
