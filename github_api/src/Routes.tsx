import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import CepSearch from 'pages/UserSearch';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/usersearch">
        <CepSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
