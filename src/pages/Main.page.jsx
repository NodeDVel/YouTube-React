import React, { useState } from 'react';

import HeaderBar from '../components/HeaderBar.component';
import MainBar from '../components/MainBar.component';
import SideBar from '../components/SideBar.component';

const Main = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleClickMenu = () => {
    setCollapsed(!isCollapsed);
  };
  
  return (
    <>
      <HeaderBar onClickMenu={handleClickMenu}/>
      <SideBar collapsed={isCollapsed} />
      <MainBar collapsed={isCollapsed} />
    </>
  )
}

export default Main;