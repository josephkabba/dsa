import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Dashboard from "./main/Dashboard/Dashboard";
import Overview from "./main/home/Overview";
import Creators from "./main/Creators/Creators";
import Topics from "./main/Topics/Topics";
import mapping from "./mapping";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/fibonnaci">
            <Dashboard context={null} Component={Topics} data={mapping.fibonnaci}/>
          </Route>
          <Route path="/factorial">
            <Dashboard context={null} Component={Topics} data={mapping.factorial}/>
          </Route>
          <Route path="/tower_of_hanoi">
            <Dashboard context={null} Component={Topics} data={mapping.towerOfHanoi}/>
          </Route>
          <Route path="/queue">
            <Dashboard context={null} Component={Topics} data={mapping.queue}/>
          </Route>
          <Route path="/stack">
            <Dashboard context={null} Component={Topics} data={mapping.stack}/>
          </Route>
          <Route path="/linked_list">
            <Dashboard context={null} Component={Topics} data={mapping.LinkedList}/>
          </Route>
          <Route path="/creators">
            <Dashboard context={null} Component={Creators} data={null}/>
          </Route>
          <Route path="/">
            <Dashboard context={null} Component={Overview} data={null}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
