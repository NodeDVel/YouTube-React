import React from 'react';

import styled from 'styled-components';

import { ImgData } from '../../lib/png';

import HeaderBar from '../headerBar/HeaderBar';
import SideBar from '../sideBar/SideBar';
import PlayListItem from './playListItem';

const ListLayout = styled.div`
  margin-left: 30%;
`;

const PlayList = ({ lists, onInsert, onRemove }) => {
  return (
    <>
      <HeaderBar />
      <SideBar />
      <ListLayout>
        <div style={{ display: 'flex' }}>
          <img src={ImgData.filter} style={{ marginRight: '5px', marginBottom: '20px' }}/> 정렬
        </div>
        {lists.map(list => (
          <PlayListItem
            list={list}
            key={list.id}
          />
        ))}
      </ListLayout>
    </>
  )
}

export default PlayList;