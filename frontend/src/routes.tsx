import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Componentes
import Landing from './views/landing/Landing';
import OrphanagesMap from './views/orphanages/OrphanagesMap';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;