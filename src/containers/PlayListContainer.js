import React from 'react';

import { connect } from 'react-redux';
import { insert, remove } from '../modules/playList';

import PlayList from '../components/playLaterList/playList';

const PlayListContainer = ({ lists, insert, remove }) => {
  return (
    <PlayList lists={lists} onInsert={insert} onRemove={remove} />
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
)(PlayListContainer);