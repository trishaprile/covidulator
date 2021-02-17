import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/quiz" component={Quiz} />
          <Route path="/results" component={Results} />
          <Route path="/" component={Home} />
        </Switch>   
      </Router>
    </div>
  );
}

export default App;
