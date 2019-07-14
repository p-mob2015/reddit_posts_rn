/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';
import { POST_ROOT } from 'react-native-dotenv';

import { THEME } from '@app/enum';

class PostScreen extends Component {
  static propTypes = {
    navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Post unavailable'),
    headerStyle: {
      backgroundColor: THEME.COLOR_BK_BRAND,
    },
    headerTintColor: THEME.COLOR_TEXT_BRAND,
  });

  render() {
    const { navigation: { getParam } } = this.props;

    return <WebView source={{ uri: getParam('url', POST_ROOT) }} />;
  }
}

export default PostScreen;
