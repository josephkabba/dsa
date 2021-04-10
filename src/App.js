import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Dashboard from "./main/Dashboard/Dashboard";
import Overview from "./main/home/Overview";
import Creators from "./main/Creators/Creators";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/overview">
            <Dashboard context={null} Component={Overview} />
          </Route>
          <Route path="/creators">
            <Dashboard context={null} Component={Creators} />
          </Route>
          <Route path="/">
            <Dashboard context={null} Component={null} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
