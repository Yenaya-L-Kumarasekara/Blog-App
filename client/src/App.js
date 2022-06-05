import TopBar from "./components/topBar/TopBar";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import Settings from "./page/settings/Settings";
import Home from "./page/home/Home";
import Single from "./page/single/Single";
import Write from "./page/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route exact path="/login">
          {user ? <Home /> : <Login />}
          </Route>
          <Route exact path="/write">
          {user ? <Write /> : <Register />}
          </Route>
          <Route exact path="/settings">
          {user ? <Settings /> : <Register />}
          </Route>
          <Route exact path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
