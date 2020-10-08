import React, { useState } from 'react';

import HeaderBar from '../components/headerBar/HeaderBar';
import MainBar from '../components/mainBar/MainBar';
import SideBar from '../components/sideBar/SideBar';

const Main = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleClickMenu = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <>
      <HeaderBar onClickMenu={handleClickMenu} />
      <SideBar collapsed={isCollapsed} />
      <MainBar collapsed={isCollapsed} />
    </>
  )
}

export default Main;