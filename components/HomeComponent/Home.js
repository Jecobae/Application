import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Platform} from 'react-native';
import HomeVideoComponent from './HomeVideoComponent';
import PlayingVideoComponent from './PlayingVideoComponent';

const Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#FFF', paddingHorizontal: 8}}>
      <ScrollView>
        <PlayingVideoComponent
          navigation={navigation}
          bannerTitle={'최근 시청 강좌'}
          bannerDesc={'"최근에 시청한 강좌에요"'}
        />
        <HomeVideoComponent
          navigation={navigation}
          playListId={'POP'}
          bannerTitle={'인기 강좌'}
          bannerDesc={'"제코베 인기 강좌들을 모았어요"'}
        />
        <HomeVideoComponent
          navigation={navigation}
          playListId={'DJANGO'}
          bannerTitle={"제코베's 강좌"}
          bannerDesc={'"제코베에서만 볼 수 있는 강좌들을 모았어요"'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
