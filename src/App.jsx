import React, { useState } from 'react';
import HeaderBar from './components/HeaderBar.component';
import MainBar from './components/MainBar.component';
import MediaSideBar from './components/MediaSideBar.component';
import SideBar from './components/SideBar.component';
import SortationSideBar from './components/SortationSideBar.component';

const App = () => {
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

export default App;