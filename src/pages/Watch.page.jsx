import React from 'react';

import HeaderBar from '../components/HeaderBar.component';
import WatchScreen from '../components/WatchSreen.component';

const Watch = ({ match }) => {
  const { title } = match.params;
  console.log(title);

  return (
    <>
      <HeaderBar />
      <WatchScreen title={title} />
    </>
  )
}

export default Watch;

//width를 늘리거나 transform scale, translate, setInterval 아니면 애니메이션 