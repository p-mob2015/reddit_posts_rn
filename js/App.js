import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import HomeScreen from './screens/Home';
import PostScreen from './screens/Post';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Post: {
    screen: PostScreen,
  },
});

const Navigation = createAppContainer(AppNavigator);
const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
