import React, { useState } from 'react';

import HeaderBar from '../components/HeaderBar.component';
import SideBar from '../components/SideBar.component';
import SearchResult from '../components/SearchResult.component';

const Search = ({ match }) => {
  const { searchValue } = match.params;
  console.log(searchValue);

  const [isCollapsed, setCollapsed] = useState(false);

  const handleClickMenu = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <>
      <HeaderBar onClickMenu={handleClickMenu} />
      <SideBar collapsed={isCollapsed} />
      <SearchResult collapsed={isCollapsed} />
    </>
  )
}

export default Search;