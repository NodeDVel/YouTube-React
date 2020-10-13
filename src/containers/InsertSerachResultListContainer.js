import React from 'react';

import { connect } from 'react-redux';

import { insert, remove } from '../modules/playList';

import SearchResultList from '../components/search/SearchResultList';

const InsertSerachListResultList = ({ collapsed, key, title, num, lists, insert, remove }) => {
  return (
    <SearchResultList collapsed={collapsed} key={key} title={title} num={num} lists={lists} onInsert={insert} onRemove={remove} />
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