/* eslint-disable import/no-unresolved */
import axios from 'axios';
import { API_ROOT } from 'react-native-dotenv';

import { ERRORS } from '@app/enum';

const loadPosts = async (nextPage) => {
  try {
    const params = nextPage ? { after: nextPage } : {};
    const response = await axios.get(`${API_ROOT}/r/pics/hot.json`, { params });

    return response.data;
  } catch (error) {
    throw new Error({
      type: ERRORS.API_FAILURE,
      error,
    });
  }
};

export default {
  loadPosts,
};
