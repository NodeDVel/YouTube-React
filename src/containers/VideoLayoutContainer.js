import React from 'react';

import { connect } from 'react-redux';

import { insert, remove } from '../modules/playList';

import VideoLayoutComponent from '../components/mainBar/VideoLayoutComponent';

const VideoLayoutContainer = ({ collapsed, key, title, num,  lists, insert, remove, res }) => {
  return (
    <VideoLayoutComponent collapsed={collapsed} key={key} title={title} num={num} lists={lists} onInsert={insert} onRemove={remove} res={res} />
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
)(VideoLayoutContainer);