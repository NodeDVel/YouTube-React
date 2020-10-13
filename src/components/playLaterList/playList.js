import React from 'react';

import styled from 'styled-components';

import { ImgData } from '../../lib/png';

import HeaderBar from '../headerBar/HeaderBar';
import SideBar from '../sideBar/SideBar';
import PlayListItem from './playListItem';

const SpaceBoxLayout = styled.div`
  display: flex;
`;

const SpaceBox = styled.div`
  width: 275px;
  height: 100%;
  background-color: #F9F9F9;

  ${props => props.changed && `width: 75px;`}

  @media all and (max-width: 1300px) {
    width: auto;
    margin-left: 5%;
  }

  @media all and (max-width: 650px) {
    display: none;
  }
`;

const PlayListWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const LeftListLayout = styled.div`
  box-sizing: border-box;
  padding: 24px 32px;
  width: 417px;
  height: 913px;
  background-color: #f9f9f9;
  img {
    width: 100%;
  }
`;

const RightListLayout = styled.div`
  background-color: #f1f1f1;
  width: 75%;

  & > div:first-child {
    box-sizing: border-box;
    padding: 2% 3%;
  }
`;

const PlayList = ({ lists }) => {
  return (
    <>
      <HeaderBar />
      <SideBar />
      <SpaceBoxLayout>
        <SpaceBox />
        <PlayListWrapper>
          <LeftListLayout>
            <img src={ImgData.game} />
            <div>
              <div style={{ fontSize: '24px', padding: '4% 0%' }}>나중에 볼 동영상</div>
              <div style={{ fontSize: '14px', color: '#606060' }}>동영상 2개 업데이트: 오늘</div>
            </div>
          </LeftListLayout>
          <RightListLayout>
            <div style={{ display: 'flex' }}>
              <img src={ImgData.filter} style={{ marginRight: '5px' }} /> 정렬
            </div>
            {lists.map(list => (
              <PlayListItem
                list={list}
                key={list.id}
              />
            ))}
          </RightListLayout>
        </PlayListWrapper>
      </SpaceBoxLayout>
    </>
  )
}

export default PlayList;