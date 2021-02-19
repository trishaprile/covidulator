import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/quiz" component={Quiz} />
          <Route path="/" component={Home} />
        </Switch>   
      </Router>
    </div>
  );
}

export default App;
