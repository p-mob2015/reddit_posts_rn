import { LOAD_POSTS, SET_NEXT_PAGE } from '../actions/posts';
import { posts as initialState } from './initialState';
import { remoteReducerIncremental } from './base';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEXT_PAGE:
      return {
        ...state,
        nextPage: action.nextPage,
      };
    default:
      return remoteReducerIncremental(LOAD_POSTS, state, action);
  }
};

export default reducer;
