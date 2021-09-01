import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          
        </Route>
        <Route exact path="/">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
