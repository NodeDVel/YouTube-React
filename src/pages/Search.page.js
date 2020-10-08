import React, { useState } from 'react';

import HeaderBar from '../components/headerBar/HeaderBar';
import SideBar from '../components/sideBar/SideBar';
import SearchResult from '../components/search/SearchResult';

const Search = ({ match }) => {
  const { title } = match.params;

  const [isCollapsed, setCollapsed] = useState(false);

  const handleClickMenu = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <>
      <HeaderBar onClickMenu={handleClickMenu} />
      <SideBar collapsed={isCollapsed} />
      <SearchResult collapsed={isCollapsed} title={title} />
    </>
  )
}

export default Search;