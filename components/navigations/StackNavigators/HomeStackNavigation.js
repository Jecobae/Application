import {createStackNavigator} from 'react-navigation-stack';
import Home from '../../HomeComponent/Home';
import LectureList from '../../LectureComponent/LectureList';
import LectureVideo from '../../LectureComponent/LectureVideo';
import stackNavigationConfig from '../NavigationConfig/StackNavigationConfig';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    LectureList: {
      screen: LectureList,
    },
    LectureVideo: {
      screen: LectureVideo,
    },
  },
  {...stackNavigationConfig, headerMode: 'none', initialRouteName: 'Home'},
);

export default HomeStack;
