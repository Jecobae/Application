import React, {reducer} from 'react';
import {SafeAreaView, ScrollView, Platform} from 'react-native';
import HomeVideoComponent from './HomeVideoComponent';

const Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#FFF', paddingHorizontal: 8}}>
      <ScrollView>
        <HomeVideoComponent
          navigation={navigation}
          playListId={'POP'}
          bannerTitle={'인기 강좌'}
          bannerDesc={'"제코베에 인기 영상들을 모았어요"'}
        />
        <HomeVideoComponent
          navigation={navigation}
          playListId={'PYTHON'}
          bannerTitle={'시청 중인 강좌'}
          bannerDesc={'"마지막으로 시청한 영상들 입니다"'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
