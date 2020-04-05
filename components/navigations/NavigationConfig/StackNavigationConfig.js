import {
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from 'react-navigation-stack';

const stackNavigationConfig = {
  defaultNavigationOptions: ({navigation}) => ({
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    gestureResponseDistance: {
      horizontal: 250,
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
  }),
};

export default stackNavigationConfig;
