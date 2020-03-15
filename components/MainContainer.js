import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BottomNavigation from './navigations/BottomNavigation';
import License from './License';
import MainHeader from './MainHeader';
import CheatSheet from './navigations/StackNavigators/CheatSheetStackNavigation';

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: BottomNavigation,
    },
    License: {
      screen: License,
      navigationOptions: {
        title: '오픈소스 라이선스',
      },
    },
    CheatSheet: {
      screen: CheatSheet,
      navigationOptions: {
        title: '',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      header: () => <MainHeader navigation={navigation} />,
    }),
  },
);

export default createAppContainer(HomeStackNavigator);
