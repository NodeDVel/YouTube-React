import React from 'react';

import { connect } from 'react-redux';
import { searchPostList } from '../modules/youtubeList'

import SearchResult from '../components/search/SearchResult';

const SearchYoutubeVideoItemContainer = ({ collapsed, title ,searchVideos }) => {
  return (
    <SearchResult collapsed={collapsed} title={title} searchVideos={searchVideos} />
  )
}

export default connect(
  state => ({
    searchVideos: state.youtubeList.searchVideos
  }),
  {
    searchPostList
  }
)(SearchYoutubeVideoItemContainer)