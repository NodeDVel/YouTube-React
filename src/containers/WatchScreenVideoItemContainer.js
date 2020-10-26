import React from 'react';

import { connect } from 'react-redux';

import WatchScreen from '../components/watch/WatchSreen';

import { searchPostList } from '../modules/youtubeList'

const WatchScreenVideoItemContainer = ({ id, title, handleClickModal, searchVideos }) => {
  return (
    <WatchScreen id={id} title={title} handleClickModal={handleClickModal} searchVideos={searchVideos} />
  )
}

export default connect(
  state => ({
    searchVideos: state.youtubeList.searchVideos
  }),
  {
    searchPostList
  }
)(WatchScreenVideoItemContainer)