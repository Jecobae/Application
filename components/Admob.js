import React from 'react';
import {View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import env from '../env.config';

function Admob() {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <BannerAd
        unitId={env.admob.bannerId}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => {
          console.log('Advert loaded');
        }}
        onAdFailedToLoad={error => {
          console.error('Advert failed to load: ', error);
        }}
      />
    </View>
  );
}

export default Admob;
