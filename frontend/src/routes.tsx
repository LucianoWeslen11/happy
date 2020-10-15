import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Componentes
import LandingPage from './views/LandingPage';
import OrphanagesMap from './views/OrphanagesMap';
import OrphanageInfo from './views/OrphanageInfo';
import CreateOrphanage from './views/CreateOrphanage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" exact component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={OrphanageInfo} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;