export const LOAD_POSTS = 'LOAD_POSTS';
export const SET_NEXT_PAGE = 'SET_NEXT_PAGE';

export const loadPosts = nextPage => ({
  type: LOAD_POSTS,
  nextPage,
});

export const setNextPage = nextPage => ({
  type: SET_NEXT_PAGE,
  nextPage,
});
