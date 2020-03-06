import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeStackNavigation from './StackNavigators/HomeStackNavigation';
import BookList from '../BookComponent/BookList';
import CheatSheet from './StackNavigators/CheatSheetStackNavigation';
import LectureStackNavigation from './StackNavigators/LectureStackNavigation';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import palette from '../../style/palette';
import {normalize} from 'react-native-elements';

const iconSize = 28;

const BottomNavi = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigation,
      navigationOptions: {
        tabBarLabel: '홈',
        tabBarIcon: ({tintColor}) => (
          <EntypoIcons
            name={'home'}
            color={tintColor}
            size={iconSize}
            style={{width: iconSize, height: iconSize}}
          />
        ),
      },
    },
    Lecture: {
      screen: LectureStackNavigation,
      navigationOptions: {
        tabBarLabel: '강좌 보기',
        tabBarIcon: ({tintColor}) => (
          <MaterialIcons
            name={'playlist-play'}
            color={tintColor}
            size={35}
            style={{width: 35, height: 30}}
          />
        ),
      },
    },
    Book: {
      screen: BookList,
      navigationOptions: {
        tabBarLabel: 'Book',
        tabBarIcon: ({tintColor, focused}) => (
          <MaterialIcons
            name={!focused ? 'book-open' : 'book-open-outline'}
            color={tintColor}
            size={iconSize}
            style={{width: iconSize, height: iconSize}}
          />
        ),
      },
    },
    // Sheet: {
    //   screen: CheatSheet,
    //   navigationOptions: {
    //     title: '프리미엄',
    //     tabBarIcon: ({tintColor, focused}) => (
    //       <MaterialIcons
    //         name={focused ? 'ondemand-video' : 'personal-video'}
    //         color={tintColor}
    //         size={iconSize}
    //         style={{width: iconSize, height: iconSize}}
    //       />
    //     ),
    //   },
    // },
  },
  {
    tabBarOptions: {
      activeTintColor: palette.textColor,
      inactiveTintColor: palette.inactiveTintColor,
      style: {
        backgroundColor: palette.mainColor,
        borderTopWidth: 0,
        height: normalize(Platform.OS === 'ios' ? 42 : 48),
        paddingVertical: 8,
      },
    },
    initialRouteName: 'Home',
  },
);

export default BottomNavi;
