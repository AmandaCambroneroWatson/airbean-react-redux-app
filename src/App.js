import { Route, Switch } from 'react-router-dom';
import Landing from './views/Landing';
import About from './views/About';
import Menu from './views/Menu';
import Profile from './views/Profile';
import Status from './views/Status';
import './style/main.scss';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/about" exact component={About} />
      <Route path="/menu" exact component={Menu} />
      <Route path="/Profile" exact component={Profile} />
      <Route path="/Status" exact component={Status} />
    </Switch>
  );
}

export default App;