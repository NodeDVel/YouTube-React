import React from 'react';
import styled from 'styled-components';

import { ImgData } from '../../lib/png';

const MediaSideBarLayout = styled.div`
  display: none;

  ${props => props.changed && `
    display: block;
    heigth: 100%;

    div:first-child {
      color: red;
    }

    div:hover {
      cursor: pointer;
      background-color: #e8e8e8;
    }
  `}

  @media all and (max-width: 1300px) {
    display: block;
    width: 100%;
    height: 100%;

    div:first-child {
      color: red;
    }

    div:hover {
      cursor: pointer;
      background-color: #e8e8e8;
    }
  }

  @media all and (max-width: 650px) {
    display: none;
  }
`;

const MediaBoxLayout = styled.div`
  ${props => props.changed && `
    width: 72px;
    height: 74px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      margin-bottom: 20%;
    }
  `}

  @media all and (max-width: 1300px) {
    display: block;
    width: 72px;
    height: 74px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      margin-bottom: 20%;
    }
  }
`;

const MediaSideBar = (props) => {
  return (
    <MediaSideBarLayout changed={props.showed}>
      <MediaBoxLayout changed={props.showed}>
        <img src="/img/sideImg1.png" />홈
      </MediaBoxLayout>
      <MediaBoxLayout changed={props.showed}>
        <img src={ImgData.sideImg2} />인기
      </MediaBoxLayout>
      <MediaBoxLayout changed={props.showed}>
        <img src={ImgData.sideImg3} />구독
      </MediaBoxLayout>
      <MediaBoxLayout changed={props.showed}>
        <img src={ImgData.sideImg4} />보관함
      </MediaBoxLayout>
    </MediaSideBarLayout>
  )
}

export default MediaSideBar;