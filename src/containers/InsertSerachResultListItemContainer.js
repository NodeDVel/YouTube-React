import React from 'react';

import { connect } from 'react-redux';

import { insert, remove } from '../modules/playList';

import SearchResultItem from '../components/search/SearchResultItem';

const InsertSerachListResultListItem = ({ collapsed, key, title, num, lists, insert, remove, searchVideos }) => {
  return (
    <SearchResultItem collapsed={collapsed} key={key} title={title} num={num} lists={lists} onInsert={insert} onRemove={remove} searchVideos={searchVideos} />
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
)(InsertSerachListResultListItem);