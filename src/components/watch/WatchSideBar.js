import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import SortationSideBar from '../sideBar/SortationSideBar';
import WatchSideHeaderBar from './WatchSideHeaderBar';

const WatchSideBarWrapper = styled.div`
  position: fixed;

  ${props => props.collapsed && `
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.4); 

    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation-name: opacity;
    animation-duration: 0.1s;
    animation-iteration-count:1;
    animation-direction:alternate;
    animation-fill-mode: forwards;
  `}
`;

const WatchSideBar = (props) => {
  useEffect(() => {
    if (props.collapsed === true) {
      body.style.overflow = 'hidden';
      return () => {
        body.style.removeProperty('overflow');
      };
    }
  }, [props.collapsed]);

  const body = document.querySelector('body');
  const [isActive, setActive] = useState(false);

  const onClickHandler = (e) => {
    props.handleClickMenu && props.handleClickMenu();
  }

  const onClickActive = () => {
    setActive(!isActive);
    setTimeout(() => {
      props.handleClickMenu();
      setActive(false);
    }, 300)
  }

  return (
    <WatchSideBarWrapper collapsed={props.collapsed}>
      <WatchSideHeaderBar collapsed={props.collapsed} onClickHandler={onClickHandler} onClickActive={onClickActive} active={isActive} />
      <SortationSideBar collapsed={props.collapsed} active={isActive} />
    </WatchSideBarWrapper>
  )
}

export default WatchSideBar;