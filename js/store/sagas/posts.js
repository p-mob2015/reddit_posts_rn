/* eslint-disable import/no-unresolved */
import { call, put } from 'redux-saga/effects';
import get from 'lodash/get';

import PostsService from '@app/services/posts';
import { LOAD_POSTS, SET_NEXT_PAGE } from '../actions/posts';

export function* loadPosts({ nextPage }) {
  try {
    const res = yield call(PostsService.loadPosts, nextPage);

    yield put({
      type: `${LOAD_POSTS}_SUCCESS`,
      result: get(res, 'data.children', []),
    });
    yield put({ type: SET_NEXT_PAGE, nextPage: res.data.after });
  } catch (error) {
    yield put({ type: `${LOAD_POSTS}_FAILURE`, error });
  }
}
