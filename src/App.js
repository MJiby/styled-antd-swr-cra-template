import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
