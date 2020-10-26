import React from 'react';

import { Link } from 'react-router-dom';

import { ImgData } from '../../lib/png';

import styled from 'styled-components';

const WatchSideHeaderWrapper = styled.div`
  transform: translate(-100%, 0);
  transition-duration: 0.3s;

  ${props => props.wide &&`
    display: flex;
    align-items: center;
    height: 55px;
    background-color: #ffffff;
    width: 240px;
    position: fixed;

    transform: translate(0%, 0);
  `}
  ${props => props.active && `
  transform: translate(-100%, 0);
  `}

  & > img {
    padding-left: 24px;
    cursor: pointer;
  }
`;

const WatchSideHeaderBar = (props) => {
  return (
    <WatchSideHeaderWrapper wide={props.collapsed} active={props.active}>
      <img src={ImgData.icon} onClick={() => props.onClickActive()} />
      <Link to="/" style={{ marginLeft: '32px', paddingTop: '2px' }}><img src={ImgData.mainIcon} /></Link>
    </WatchSideHeaderWrapper>
  )
}

export default WatchSideHeaderBar;