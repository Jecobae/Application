import {createStackNavigator} from 'react-navigation-stack';
import LectureCategory from '../../LectureComponent/LectureCategory';
import LectureList from '../../LectureComponent/LectureList';
import LectureVideo from '../../LectureComponent/LectureVideo';
import stackNavigationConfig from '../NavigationConfig/StackNavigationConfig';

const LectureStackNavigation = createStackNavigator(
  {
    LectureCategory: {
      screen: LectureCategory,
    },
    // 강좌 개요
    LectureList: {
      screen: LectureList,
    },
    //강좌 영상
    LectureVideo: {
      screen: LectureVideo,
    },
  },
  {
    ...stackNavigationConfig,
    headerMode: 'none',
    initialRouteName: 'LectureCategory',
  },
);
export default LectureStackNavigation;
