import React from 'react';

import { connect } from 'react-redux';

import { insert, remove } from '../modules/playList';

import VideoLayoutComponent from '../components/mainBar/VideoLayoutComponent';

const VideoLayoutContainer = ({ collapsed, key, title, lists, insert, remove }) => {
  return (
    <VideoLayoutComponent collapsed={collapsed} key={key} title={title} lists={lists} onInsert={insert} onRemove={remove} />
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
)(VideoLayoutContainer)