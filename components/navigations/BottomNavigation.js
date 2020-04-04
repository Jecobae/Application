import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeStackNavigation from './StackNavigators/HomeStackNavigation';
import BookList from '../BookComponent/BookList';
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
        tabBarLabel: 'Books',
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
    //TODO 프리미엄 강좌
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
    resetOnBlur: true,
    lazy: true,
    tabBarOptions: {
      activeTintColor: palette.textColor,
      inactiveTintColor: palette.inactiveTintColor,
      style: {
        backgroundColor: palette.mainColor,
        borderTopWidth: 0,
        height: normalize(Platform.OS === 'ios' ? 48 : 50),
        paddingVertical: 8,
      },
    },
    initialRouteName: 'Home',
  },
);

export default BottomNavi;
