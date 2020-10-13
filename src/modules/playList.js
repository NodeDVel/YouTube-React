import { createAction, handleActions } from "redux-actions";

import { data } from '../components/search/SearchResultList';

const INSERT = "video/INSERT";
const REMOVE = "video/REMOVE";

export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);

const initialState = {
  lists: []
}

const playList = handleActions(
  {
    [INSERT]: (state, action) => ({
      ...state,
      lists: state.lists.concat(action.payload),
    }),
    [REMOVE]: (state, action) => ({
      ...state,
      lists: state.lists.filter(list => list.id !== action.payload)
    })
  },
  initialState,
);

export default playList;