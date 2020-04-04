import config from 'react-native-config';
import {Platform} from 'react-native';

const Config = {
  getBannerId: function() {
    let bannerId;
    if (!config.BANNER_ID) {
      bannerId = Platform.select({
        android: config.ANDROID_BANNER_ID,
        ios: config.IOS_BANNER_ID,
      });
      return bannerId;
    } else {
      bannerId = config.BANNER_ID;
      return bannerId;
    }
  },
};

const env = {
  admob: {
    bannerId: Config.getBannerId(),
    ios: config.IOS_BANNER_ID,
    test: config.BANNER_ID,
  },
};

export default env;
