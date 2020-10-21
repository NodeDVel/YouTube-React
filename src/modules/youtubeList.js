import { createAction, handleActions } from "redux-actions";

import axios from 'axios';

import { api_data, config } from '../lib/apiData';

const POST_LIST = 'api/POST_LIST';

export const postList = () => async dispatch => {
  dispatch({ type: POST_LIST });
  try {
    axios({
      url: 'https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
      method: "POST",
      data: api_data,
      headers: config,
    }).then(val => dispatch({ type: POST_LIST, payload: val.data.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems[0].richItemRenderer.content.videoRenderer}))
  } catch (e) {
    throw e;
  }
}

const initialState = {
  videos: []
}

const youtubeList = handleActions(
  {
    [POST_LIST]: (state, action) => ({
      ...state,
      videos: state.videos.concat(action.payload)
    })
  },
  initialState,
)

export default youtubeList;