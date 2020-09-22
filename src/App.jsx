import React from 'react';
import HeaderBar from './components/HeaderBar.component';
import MainBar from './components/MainBar.component';
import SideBar from './components/SideBar.component';

const App = () => {
  return (
    <>
      <HeaderBar />
      <SideBar />
      <MainBar />
    </>
  )
}

export default App;