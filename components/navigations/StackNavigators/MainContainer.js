import React from 'react';
import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from 'react-navigation-stack';
import BottomNavigation from '../BottomNavigation';
import License from '../../License';
import MainHeader from '../../MainHeader';
import CheatSheet from './CheatSheetStackNavigation';

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
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      gestureResponseDistance: {
        horizontal: 250,
      },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
    }),
  },
);

export default createAppContainer(HomeStackNavigator);
