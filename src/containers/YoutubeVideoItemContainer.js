import React, { useEffect } from 'react';

import { connect, useDispatch } from 'react-redux';

import MainBar from '../components/mainBar/MainBar';

import { postList } from '../modules/youtubeList';

const YoutubeVideoItemContainer = ({ videos }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postList());
  }, [])

  return (
    <MainBar videos={videos} />
  )
}

export default connect(
  state => ({
    videos: state.youtubeList.videos
  }),
  {
    postList
  }
)(YoutubeVideoItemContainer)