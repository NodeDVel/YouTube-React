import React from 'react';

import { connect } from 'react-redux';

import { insert, remove } from '../modules/playList';

import SearchResultList from '../components/search/SearchResultList';

const InsertSerachListResultList = ({ lists, insert, remove }) => {
  return (
    <SearchResultList lists={lists} onInsert={insert} onRemove={remove} />
  )
}

export default connect(
  state => ({
    lists: state.playList.lists
  }),
  {
    insert,
    remove
  },
)(InsertSerachListResultList)