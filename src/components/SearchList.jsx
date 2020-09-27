import React from 'react';

import styled from 'styled-components';

import SearchListItem from './SearchListItem';

const SearchListLayout = styled.div`
  position: fixed;
  /* width: 604px; */
  width: 564px;
  height: 300px;
  top: 56px;
  /* left: 611px; */
  left: 571px;
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
