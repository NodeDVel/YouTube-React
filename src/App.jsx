import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main.page';
import Search from './pages/Search.page';
import Watch from './pages/Watch.page';
import Exception from './components/Exception.component';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route exact={true} path="/search/:title" component={Search} />
        <Route exact={true} path="/search/:title/watch" component={Watch} />
        <Route path="*" component={Exception} />
      </Switch>
    </>
  )
}

export default App;