import "./App.css";
import Break from "./Pages/Break/Break"
import Todo from "./Pages/Todo/Todo"
import Home from "./Home"
import Quiz from "./Pages/QUiz/Quiz"
import About from "./Pages/About"
import Land from "./Pages/Landing/Land"
import SMSForm from "./SMSForm"
// import Auth0ProviderWithHistory from "./auth0Provider";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/">
          <Land />
        </Route>
        <Route exact path="/sms">
          <SMSForm />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
      
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/break">
          <Break />
        </Route>
    </Switch>
  </Router>
  );
}

export default App;
