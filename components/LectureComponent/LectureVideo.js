import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';
import {normalize} from 'react-native-elements';
import AsyncStorageConfig from '../../lib/AsyncStorage';
import * as env from '../../env';
// const deviceHeight = Dimensions.get('window').height;
// const deviceWidth = Dimensions.get('window').width;

const LectureVideo = ({navigation}) => {
  const value = navigation.getParam;

  const setPlayingVideo = async (videoId, title, img, desc) => {
    await AsyncStorageConfig.setStorage(videoId, title, img, desc);
  };

  const _setVideoState = async e => {
    if (e.state === 'playing') {
      setPlayingVideo(
        value('videoId'),
        value('title'),
        value('img'),
        value('desc'),
      );
    }
  };

  return (
    <ScrollView style={style.container}>
      {/* <MainHeader navigation={navigation} /> */}
      <View style={style.videoBox}>
        <YouTube
          apiKey={env.YOUTUBE_API_KEY}
          videoId={value('videoId')}
          controls={1}
          style={{alignSelf: 'stretch', height: 270}}
          onChangeState={e => _setVideoState(e)}
        />
      </View>
      <Text style={style.title}>{value('title')}</Text>
      {/* <TouchableOpacity onPress= {()=> webComponent()}> */}
      <Text style={style.admin}>제작: 바울랩 </Text>
      {/* </TouchableOpacity> */}
      <Text style={style.body}>{value('desc')}</Text>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    paddingVertical: 10,
    paddingHorizontal: 17,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: normalize(13),
  },
  admin: {
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
    paddingVertical: 15,
    paddingHorizontal: 17,
    color: '#8a8a8a',
    fontSize: normalize(11),
  },
  body: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: normalize(12),
  },
  videoBox: {
    elevation: 20,
  },
  // webview: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'stretch',
  //   justifyContent: 'center',
  //   width: deviceWidth,
  //   height: deviceHeight

  // },
});

export default LectureVideo;
