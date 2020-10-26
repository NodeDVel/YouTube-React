import React, { useState } from 'react';

import HeaderBar from '../components/headerBar/HeaderBar';
import WatchSideBar from '../components/watch/WatchSideBar';
import ShareBox from '../components/watch/ShareBox';
import WatchScreenVideoItemContainer from '../containers/WatchScreenVideoItemContainer';

const Watch = ({ match }) => {
  const { title } = match.params;
  const { id } = match.params;

  const [isCollapsed, setCollapsed] = useState(false);
  const [isShowed, setShowed] = useState(false); 

  const handleClickMenu = (e) => {
    setCollapsed(!isCollapsed);
  };

  const handleClickModal = (e) => {
    setShowed(!isShowed);
  }

  return (
    <>
      <HeaderBar onClickMenu={handleClickMenu} />
      <WatchSideBar handleClickMenu={handleClickMenu} collapsed={isCollapsed} />
      {
        isShowed && <ShareBox handleClickModal={handleClickModal} /> 
      }
      <WatchScreenVideoItemContainer title={title} handleClickModal={handleClickModal} id={id}  />
    </>
  )
}

export default Watch;