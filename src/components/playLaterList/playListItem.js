import React from 'react';

import styled from 'styled-components';

import { ImgData } from '../../lib/png';

const PlayListItemWrapper = styled.div`
  width: 612px;
  height: 60px;
  background-color: #f1f1f1;
  display: flex;
  padding: 11px 0px;
  border-bottom: 1px solid #606060;
  align-items: center;
  img {
    margin-right: 9px;
  }
`;

const PlayListItemText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & > span:first-child {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 25px;
  }

  & > span:nth-child(2) {
    font-size: 13px;
    color: #606060;
  }
`;

const PlayListItem = ({ list }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={ImgData.list} style={{ margin: '0px 5px' }} />
      <PlayListItemWrapper>
        <img src={list.imgSrc} style={{ width: '120px', height: '67px' }} />
        <PlayListItemText>
          {list.id}
          <span>{list.title}</span>
          <span>{list.informationName}</span>
        </PlayListItemText>
      </PlayListItemWrapper>

    </div>
  )
}

export default PlayListItem;