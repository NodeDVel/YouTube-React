import React from 'react';

import HeaderBar from '../components/headerBar/HeaderBar';
import WatchScreen from '../components/search/WatchSreen';

const Watch = ({ match }) => {
  const { title } = match.params;

  return (
    <>
      <HeaderBar />
      <WatchScreen title={title} />
    </>
  )
}

export default Watch;