import React from 'react';
import styled from 'styled-components';

import sideImg1 from '../lib/png/sideImg1.png';
import sideImg2 from '../lib/png/sideImg2.png';
import sideImg3 from '../lib/png/sideImg3.png';
import sideImg4 from '../lib/png/sideImg4.png';

const MediaSideBarLayout = styled.div`
  display: none;

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
  @media all and (max-width: 1300px) {
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

const MediaSideBar = () => {
  return (
    <MediaSideBarLayout>
      <MediaBoxLayout>
        <img src={sideImg1} />홈
      </MediaBoxLayout>
      <MediaBoxLayout>
        <img src={sideImg2} />인기
      </MediaBoxLayout>
      <MediaBoxLayout>
        <img src={sideImg3} />구독
      </MediaBoxLayout>
      <MediaBoxLayout>
        <img src={sideImg4} />보관함
      </MediaBoxLayout>
    </MediaSideBarLayout>
  )
}

export default MediaSideBar;