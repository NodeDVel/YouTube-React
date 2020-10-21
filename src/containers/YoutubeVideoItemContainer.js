import React, { useEffect } from 'react';

import { connect, useDispatch } from 'react-redux';

import { postList } from '../modules/youtubeList';

const YoutubeVideoItemContainer = ({ videos }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postList());
  }, [])

  if (videos) {
    console.log(videos[1])
  }

  return (
    <div>
    </div>
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