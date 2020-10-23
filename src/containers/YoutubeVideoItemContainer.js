import React from 'react';

import { connect } from 'react-redux';
import { postList } from '../modules/youtubeList';

import MainBar from '../components/mainBar/MainBar';

const YoutubeVideoItemContainer = ({ videos, collapsed }) => {
  return (
    <MainBar videos={videos} collapsed={collapsed} />
  )
}

export default connect(
  state => ({
    videos: state.youtubeList.videos
  }),
  {
    postList,
  }
)(YoutubeVideoItemContainer)