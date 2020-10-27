import React from 'react';

import { connect } from 'react-redux';

import { insert, remove } from '../modules/playList';

import VideoLayoutComponent from '../components/mainBar/VideoLayoutComponent';

const VideoLayoutContainer = ({ collapsed, title, lists, insert, remove, videos }) => {
  return (
    <VideoLayoutComponent collapsed={collapsed} title={title} lists={lists} onInsert={insert} onRemove={remove} videos={videos} />
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