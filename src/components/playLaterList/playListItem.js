import React from 'react';

import styled from 'styled-components';

const PlayListItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  display: flex;
`;

const PlayListItemText = styled.div`
  display: flex;
`;

const PlayListItem = ({ list }) => {
  return (
    <PlayListItemWrapper>
      <img src={list.img} style={{ width: '120px', height: '67px' }} />
      <PlayListItemText>
        <span>{list.title}</span>
        <span>{list.informationName}</span>
      </PlayListItemText>
    </PlayListItemWrapper>
  )
}

export default PlayListItem;