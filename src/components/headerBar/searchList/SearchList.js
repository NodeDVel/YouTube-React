import React from 'react';

import styled from 'styled-components';

import SearchListItem from './SearchListItem';

const SearchListLayout = styled.div`
  position: fixed;
  width: 31.2%;
  top: 56px;
  height: 300px;
  border: 1px solid #eee;
  box-sizing: border-box;
  background-color: #FFFFFF;
  overflow: auto;
`;

const SearchList = ({ items, onRemove }) => {
  return (
    <SearchListLayout>
      {items.map(item => (
        <SearchListItem
          item={item}
          key={item.id}
          onRemove={onRemove}
        />
      ))}
    </SearchListLayout>
  )
}

export default SearchList;
