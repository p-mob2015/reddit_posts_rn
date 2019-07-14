import { takeLatest } from 'redux-saga/effects';

import { LOAD_POSTS } from '../actions/posts';
import { loadPosts } from './posts';

export default function* appSaga() {
  yield takeLatest(LOAD_POSTS, loadPosts);
}
