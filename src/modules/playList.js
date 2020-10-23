import { createAction, handleActions } from "redux-actions";

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
      lists: state.lists.filter(list => list.videoId !== action.payload)
    })
  },
  initialState,
);

export default playList;