import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App(): ReactElement {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      {/* <Route path='/admin' exact component={Home}/>
      <Route path='/adopt' exact component={Home}/>
      <Route path='/news' exact component={Home}/>
      <Route path='/about' exact component={Home}/>
      <Route path='/contact' exact component={Home}/> */}
    </Switch>
  );
}

export default App;
