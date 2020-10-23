import { handleActions } from "redux-actions";

import axios from 'axios';

import { api_data, config, search_data } from '../lib/apiData';

const MAIN_CONTINUE_TOKEN = 'api/MAIN_CONTINUE_TOKEN';
const SEARCH_CONTINUE_TOKEN = 'api/SEARCH_CONTINUE_TOKEN';
const POST_LIST = 'api/POST_LIST';
const POST_SEARCH_LIST = 'api/POST_SEARCH_LIST'

export const postList = () => async dispatch => {
  try {
    const responseData = axios({
      url: 'https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
      method: "POST",
      data: api_data,
      headers: config,
    })
    let val = await responseData;
    const continuationItems = val.data.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems.filter(x => x.richItemRenderer);
    const ItemsPageInformation = val.data.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems.slice(-1);

    api_data.continuation = ItemsPageInformation[0].continuationItemRenderer.continuationEndpoint.continuationCommand.token

    dispatch({
      type: MAIN_CONTINUE_TOKEN,
      payload: ItemsPageInformation[0].continuationItemRenderer.continuationEndpoint.continuationCommand.token
    });

    dispatch({
      type: POST_LIST,
      payload: continuationItems.map(x => x.richItemRenderer.content.videoRenderer)
    })
  } catch (e) {
    throw e;
  }
}

export const searchPostList = () => async dispatch => {
  try {
    const searchData = axios({
      url: 'https://www.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
      method: "POST",
      data: search_data,
      headers: config
    })

    let searchVal = await searchData;
    const searchVideoItem = searchVal.data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.filter(x => x.videoRenderer)
    const searchItemsPageInfo = searchVal.data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[1].continuationItemRenderer.continuationEndpoint.continuationCommand.token;
    console.log(searchItemsPageInfo)

    dispatch({
      type: SEARCH_CONTINUE_TOKEN,
      payload: searchItemsPageInfo,
    })

    dispatch({
      type: POST_SEARCH_LIST,
      payload: searchVideoItem.map(val => val.videoRenderer)
    })

  } catch (e) {
    throw e;
  }
}

const initialState = {
  videos: [],
  coutinueToken: '',
  searchVideos: []
}

const youtubeList = handleActions(
  {
    [POST_LIST]: (state, action) => ({
      ...state,
      videos: state.videos.concat(action.payload)
    }),
    [MAIN_CONTINUE_TOKEN]: (state, action) => ({
      ...state,
      coutinueToken: action.payload
    }),
    [POST_SEARCH_LIST]: (state, action) => ({
      ...state,
      searchVideos: action.payload
    }),
    [SEARCH_CONTINUE_TOKEN]: (state, action) => ({
      ...state,
      coutinueToken: action.payload
    })
  },
  initialState,
)

export default youtubeList;