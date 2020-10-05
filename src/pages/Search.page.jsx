import React, { useState } from 'react';

import HeaderBar from '../components/HeaderBar.component';
import SideBar from '../components/SideBar.component';
import SearchResult from '../components/SearchResult.component';

const Search = ({ match }) => {
  const { title } = match.params;
  console.log(title);

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