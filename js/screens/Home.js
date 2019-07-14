/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, View, FlatList, Text,
} from 'react-native';
import Spinner from 'react-native-spinkit';

import PostListItem from '@app/components/PostListItem';
import { THEME } from '@app/enum';
import { loadPosts } from '@app/store/actions/posts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinnerFooter: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  listContent: {},
});

class HomeScreen extends Component {
  static propTypes = {
    navigation: PropTypes.objectOf(PropTypes.any).isRequired,
    loadPostList: PropTypes.func.isRequired,
    posts: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.object,
    ]).isRequired,
  };

  static navigationOptions = {
    title: 'Reddit Posts',
    headerStyle: {
      backgroundColor: THEME.COLOR_BK_BRAND,
    },
    headerTintColor: THEME.COLOR_TEXT_BRAND,
  };

  componentDidMount() {
    const { loadPostList } = this.props;

    loadPostList();
  }

  keyExtractor = item => item.data.id;

  openPost = (title, url) => {
    const { navigation: { navigate } } = this.props;

    navigate('Post', { title, url });
  };

  loadNextList = () => {
    const {
      posts: { nextPage },
      loadPostList,
    } = this.props;

    if (nextPage) {
      loadPostList(nextPage);
    }
  };

  renderItem = ({ item }) => <PostListItem data={item.data} onOpen={this.openPost} />;

  renderListFooter = () => {
    const {
      posts: { isLoaded, isLoading },
    } = this.props;

    if (!isLoading || !isLoaded) {
      return null;
    }

    return (
      <View style={styles.spinnerFooter}>
        <Spinner type="Bounce" color={THEME.COLOR_BK_BRAND} />
      </View>
    );
  };

  render() {
    const {
      posts: {
        isLoaded, isLoading, data, error,
      },
    } = this.props;

    if (!isLoaded && isLoading) {
      return (
        <View style={styles.centerContainer}>
          <Spinner type="Bounce" color={THEME.COLOR_BK_BRAND} />
        </View>
      );
    }

    if (error && !data) {
      return (
        <View style={styles.centerContainer}>
          <Text>Error occurred. Check your network connection.</Text>
        </View>
      );
    }

    return (
      <View>
        <FlatList
          scrollEnabled
          contentContainerStyle={styles.listContent}
          data={data}
          renderItem={this.renderItem}
          onEndReached={this.loadNextList}
          onEndReachedThreshold={0.1}
          keyExtractor={this.keyExtractor}
          ListFooterComponent={this.renderListFooter}
          removeClippedSubviews
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});
const mapDispatchToProps = dispatch => ({
  loadPostList: nextPage => dispatch(loadPosts(nextPage)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
