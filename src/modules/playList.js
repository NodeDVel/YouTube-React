import { createAction, handleActions } from "redux-actions";

import { ImgData } from "../lib/png";
import { data } from '../components/search/SearchResultList';

const INSERT = "video/INSERT";
const REMOVE = "video/REMOVE";

export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);

const initialState = {
  lists: [
    {
      id: 1,
      img: data.게임.imgSrc,
      title: data.게임.title,
      informationName: data.게임.informationName ,
      informationNumber: data.게임.informationNumber,
      informationDate: data.게임.informationDate,
      description: data.게임.description,
    },
    {
      id: 2,
      img: data.게임.imgSrc,
      title: data.게임.title,
      informationName: data.게임.informationName ,
      informationNumber: data.게임.informationNumber,
      informationDate: data.게임.informationDate,
      description: data.게임.description,
    },
  ]
}

const playList = handleActions(
  {
    [INSERT]: (state, action) => ({
      ...state,
      lists: state.lists.concat(action.payload),
    }),
    [REMOVE]: (state, action) => ({
      ...state,
      lists: state.lists.filter(list => list.id !== action.id)
    })
  },
  initialState,
);

export default playList;