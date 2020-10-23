import React, { useState } from 'react';

import HeaderBar from '../components/headerBar/HeaderBar';
import SideBar from '../components/sideBar/SideBar';
import SearchYoutubeVideoItemContainer from '../containers/SearchYoutubeVideoItemContainer';

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
      <SearchYoutubeVideoItemContainer collapsed={isCollapsed} title={title} />
    </>
  )
}

export default Search;