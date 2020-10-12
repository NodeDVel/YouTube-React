import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

const SearchListItemLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  font-size: 13px;
  box-sizing: border-box;
  padding: 2%;
  margin-bottom: 8px;
  margin-top: 8px;
`;

const AddList = styled.div`
  color: #0000CD; /* DarkBlue */
  font-size: 15px;
  font-weight: 700;
`;

const RemoveButton = styled.div`
  color: blue;
  cursor: pointer;
`;

const SearchListItem = ({ item, onRemove }) => {
  const { id, text } = item;

  return (
    <SearchListItemLayout>
      <Link to={`/search/${text}`} style={{ textDecoration: 'none', display: 'flex', flex: '1' }}>
        <AddList key={id}>{text}</AddList>
      </Link>
      <RemoveButton onClick={() => onRemove(id)}>제거</RemoveButton>
    </SearchListItemLayout>
  )
}

export default SearchListItem;