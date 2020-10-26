import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { ImgData } from '../../lib/png';

const PlayListItemWrapper = styled.div`
  width: 670px;
  height: 60px;
  background-color: #f1f1f1;
  display: flex;
  padding-bottom: 11px;
  margin-bottom: 12px;
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

  & > span:first-child {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 18px;
  }

  & > span:nth-child(2) {
    font-size: 13px;
    color: #606060;
  }
`;

const PlayListItem = ({ list }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={ImgData.list} style={{ margin: '0px 5px', paddingBottom: '27px' }} />
      <PlayListItemWrapper>
        <Link to={`/watch/${list.videoId}`}>
        <img src={list.thumbnail.thumbnails[0].url} style={{ width: '120px', height: '67px' }} />
        </Link>
        <PlayListItemText>
          <span>{list.title.runs[0].text}</span>
          <span>{list.ownerText.runs[0].text}</span>
        </PlayListItemText>
      </PlayListItemWrapper>
    </div>
  )
}

export default PlayListItem;