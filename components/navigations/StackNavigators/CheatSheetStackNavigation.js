import {createStackNavigator} from 'react-navigation-stack';
import SheetMain from '../../CheatSheet/SheetMain';
import Sheet from '../../CheatSheet/Sheet';
import stackNavigationConfig from '../NavigationConfig/StackNavigationConfig';

const MainStack = createStackNavigator(
  {
    SheetMain: {
      screen: SheetMain,
    },
    Sheet: {
      screen: Sheet,
    },
  },
  {...stackNavigationConfig, headerMode: 'none', initialRouteName: 'SheetMain'},
);

export default MainStack;
