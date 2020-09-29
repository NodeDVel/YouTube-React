import React, { useEffect, useState } from 'react';

import HeaderBar from './components/HeaderBar.component';
import MainBar from './components/MainBar.component';
import SideBar from './components/SideBar.component';

const App = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleClickMenu = () => {
    setCollapsed(!isCollapsed);
  };

  // const [scroll, setScroll] = useState(0);

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll);
  // });

  // const onScroll = (e) => {
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;
  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     alert('스크롤 끝');
  //     return document.getElementById('wrap').append(<MainBar />);
  //   }
  // }

  return (
    <>
      <HeaderBar onClickMenu={handleClickMenu}/>
      <SideBar collapsed={isCollapsed} />
      <MainBar collapsed={isCollapsed} />
    </>
  )
}

export default App;