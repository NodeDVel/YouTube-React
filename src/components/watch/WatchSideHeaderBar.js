import React from 'react';

import { Link } from 'react-router-dom';

import { ImgData } from '../../lib/png';

import styled from 'styled-components';

const WatchSideHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  background-color: #ffffff;
  width: 240px;

  ${props => props.wide && `
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    
    @keyframes trans {
      from {
        left:-100%;
      }
      to {
        left:0%;
      }
    }

    animation-name: trans;
    animation-duration: 0.3s;
    animation-iteration-count:1;
    animation-direction:alternate;
    animation-fill-mode: forwards;
  `}

  & > img {
    padding-left: 24px;
    cursor: pointer;
  }
`;

const WatchSideHeaderBar = (props) => {
  return (
    <WatchSideHeaderWrapper wide={props.wide}>
      <img src={ImgData.icon} />
      <Link to="/" style={{ marginLeft: '32px', paddingTop: '2px' }}><img src={ImgData.mainIcon} /></Link>
    </WatchSideHeaderWrapper>
  )
}

export default WatchSideHeaderBar;