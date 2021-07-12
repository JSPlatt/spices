import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Recipes from './components/Recipes/Recipes';

function App() {
  return (
  <Router>
      <div className="App">
        <Switch>
        <Route path="/recipes">
            <Header />
            <Recipes />
          </Route>
          <Route path="/">
            <Header />
            <Body />
          </Route>
        </Switch>
      </div>
  </Router>
  );
}

export default App;
