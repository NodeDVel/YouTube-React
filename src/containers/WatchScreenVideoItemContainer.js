import React from 'react';

import { connect } from 'react-redux';

import WatchScreen from '../components/watch/WatchSreen';

import { searchPostList } from '../modules/youtubeList'

const WatchScreenVideoItemContainer = ({ id, title, location, handleClickModal, searchVideos }) => {
  return (
    <WatchScreen id={id} title={title} location={location} handleClickModal={handleClickModal} searchVideos={searchVideos} />
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