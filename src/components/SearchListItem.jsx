import React from 'react';
import styled from 'styled-components';

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
  display: flex;
  flex: 1;
`;

const RemoveButton = styled.div`
  color: blue;
  cursor: pointer;
`;

const SearchListItem = ({item, onRemove}) => {
  const { id, text } = item;

  return (
    <SearchListItemLayout>
      <AddList key={id}>{text}</AddList>
      <RemoveButton onClick={() => onRemove(id)}>제거</RemoveButton>
    </SearchListItemLayout>
  )
}

export default SearchListItem;