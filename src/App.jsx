import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main.page';
import Search from './pages/Search.page';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route exact={true} path="/search/:title" component={Search} />
      </Switch>
    </>
  )
}

export default App;