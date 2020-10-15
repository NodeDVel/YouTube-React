import React, { useEffect, useState } from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main.page';
import Search from './pages/Search.page';
import Watch from './pages/Watch.page';
import Exception from './components/addressError/Exception';
import PlayListContainer from './containers/PlayListContainer';

import axios from 'axios';

const App = () => {
  const KEY = "AIzaSyCqxQUVujJ4d2IVigUad4c0AfPEVrk4pOs";

  const params = {
    key: KEY,
  }

  useEffect(() => {
    // const response = axios.get(`https://www.googleapis.com/youtube/v3/playlists/key=${KEY}`);
    const response = axios.get('https://www.googleapis.com/youtube/v3/search', { params })

    console.log(response);
  }, [])

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