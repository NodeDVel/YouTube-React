import React, { useEffect } from 'react';

import styled from 'styled-components';

import SortationSideBar from '../sideBar/SortationSideBar';
import WatchSideHeaderBar from './WatchSideHeaderBar';

const WatchSideBarWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4); 

  @keyframes asdf {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation-name: asdf;
  animation-duration: 0.2s;
  animation-iteration-count:1;
  animation-direction:alternate;
  animation-fill-mode: forwards;
`;

const WatchSideBar = (props) => {

  const body = document.querySelector('body');
  useEffect(() => {
    body.style.overflow = 'hidden';
    return () => {
      body.style.removeProperty('overflow');
    };
  }, []);


  const onClickHandler = (e) => {
    props.handleClickMenu && props.handleClickMenu();
  }

  return (
    <WatchSideBarWrapper onClick={onClickHandler}>
      <WatchSideHeaderBar wide={props.handleClickMenu} />
      <SortationSideBar wide={props.handleClickMenu} />
    </WatchSideBarWrapper>
  )
}

export default WatchSideBar;