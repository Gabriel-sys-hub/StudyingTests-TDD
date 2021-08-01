import { Home } from './Pages/Home';
import NotFound from './Pages/NotFound';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
