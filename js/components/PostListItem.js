/* eslint-disable import/no-unresolved */
/* eslint-disable dot-notation */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Image, Icon } from 'react-native-elements';

import { POST_ROOT } from 'react-native-dotenv';
import { THEME } from '@app/enum';
import { dateFromTimestamp } from '@app/utils/format';
import { validateUrl } from '@app/utils/url';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: THEME.COLOR_BK_PRIMARY,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'transparent',
    ...THEME.SHADOW,
  },
  thumbnailBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLOR_BK_CONTRAST,
    width: 100,
    height: 100,
  },
  contentBlock: {
    justifyContent: 'space-between',
    width: '100%',
    marginHorizontal: 10,
    marginVertical: 5,
    flexShrink: 1,
  },
  title: {
    fontSize: THEME.FS_PRIMARY,
    color: THEME.COLOR_TEXT_PRIMARY,
    textAlign: 'justify',
  },
  info: {
    flexDirection: 'row',
  },
  date: {
    textAlign: 'right',
    fontSize: THEME.FS_SECONDARY,
    color: THEME.COLOR_TEXT_LIGHT,
  },
  author: {
    flexGrow: 1,
    fontSize: THEME.FS_SECONDARY,
  },
  authorLabel: {
    color: THEME.COLOR_TEXT_LIGHT,
  },
  authorName: {
    color: THEME.COLOR_BK_BRAND,
  },
  popularity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  popularityValue: {
    marginLeft: 2,
    fontSize: THEME.FS_SECONDARY,
    color: THEME.COLOR_TEXT_LIGHT,
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
});

class PostListItem extends PureComponent {
  static propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    onOpen: PropTypes.func.isRequired,
  };

  open = () => {
    const {
      data: { title, permalink },
      onOpen,
    } = this.props;

    onOpen(title, `${POST_ROOT}${permalink}`);
  };

  renderThumbnail = () => {
    const { data: { thumbnail } } = this.props;

    if (!validateUrl(thumbnail)) {
      return (
        <Icon
          name="logo-reddit"
          type="ionicon"
          color={THEME.COLOR_TEXT_LIGHT}
          size={50}
        />
      );
    }

    return (
      <Image
        source={{ uri: thumbnail }}
        style={styles.thumbnail}
        PlaceholderContent={<ActivityIndicator />}
      />
    );
  };

  render() {
    const {
      data: {
        title, created, author, score,
      },
    } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    const numComments = this.props.data['num_comments'];

    return (
      <TouchableOpacity onPress={this.open}>
        <View style={styles.container}>
          <View style={styles.thumbnailBlock}>{this.renderThumbnail()}</View>
          <View style={styles.contentBlock}>
            <Text style={styles.date}>{dateFromTimestamp(created)}</Text>
            <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
              {title}
            </Text>
            <View style={styles.info}>
              <Text style={styles.author}>
                <Text style={styles.authorLabel}>By </Text>
                <Text style={styles.authorName}>{author}</Text>
              </Text>
              <View style={styles.popularity}>
                <Icon name="star" color={THEME.COLOR_BK_BRAND} size={10} />
                <Text style={styles.popularityValue}>{score}</Text>
              </View>
              <View style={styles.popularity}>
                <Icon name="comment" color={THEME.COLOR_TEXT_LIGHT} size={10} />
                <Text style={styles.popularityValue}>
                  {numComments}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default PostListItem;
