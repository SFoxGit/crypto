import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar/navbar';
import Crypto from './Components/Crypto/crypto';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          
        </Route>
        <Route exact path="/crypto">
          <Crypto />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
