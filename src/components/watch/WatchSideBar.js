import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { ImgData } from '../../lib/png';

import SortationSideBar from '../sideBar/SortationSideBar';

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
    p {
      opacity: 0;
    }
    u {
      opacity: 1;
    }
  }

  animation-name: asdf;
  animation-duration: 120.2s;
  animation-iteration-count:1;
  animation-direction:alternate;
  animation-fill-mode: forwards;
`;

const WatchSideHeaderBar = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  background-color: #ffff;
  width: 240px;

  @keyframes trans {
    0% {
      left:-100%;
    }
    100% {
      left:0%;
    }
  }

  animation-name: trans;
  animation-duration: 0s;
  animation-iteration-count:1;
  animation-direction:alternate;
  animation-fill-mode: forwards;

  & > img {
    padding-left: 24px;
    cursor: pointer;
  }
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
      <WatchSideHeaderBar>
        <img src={ImgData.icon} onClick={() => onClickHandler()} />
        <Link to="/" style={{ marginLeft: '32px', paddingTop: '2px' }}><img src={ImgData.mainIcon} /></Link>
      </WatchSideHeaderBar>
      <SortationSideBar wide={props.handleClickMenu} />
    </WatchSideBarWrapper>
  )
}

export default WatchSideBar;