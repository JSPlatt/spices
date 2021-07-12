import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Recipes from './components/Recipes/Recipes';
import Shop from './components/Shop/Shop';
import Contact from './components/Contact/Contact';


function App() {
  return (
  <Router>
      <div className="App">
        <Switch>
        <Route path="/contact">
            <Header />
            <Contact />
        </Route>
        <Route path="/shop">
            <Header />
            <Shop />
        </Route>
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
