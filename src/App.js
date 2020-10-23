import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main.page';
import Search from './pages/Search.page';
import Watch from './pages/Watch.page';
import Exception from './components/addressError/Exception';
import PlayListContainer from './containers/PlayListContainer';


const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/search/:title" component={Search} />
      <Route exact path="/search/:title/watch" component={Watch} />
      <Route exact path="/list" component={PlayListContainer} />
      <Route path="*" component={Exception} />
    </Switch>
  )
}

export default App;