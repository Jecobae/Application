import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';
import MainHeader from '../MainHeader';
import {normalize} from 'react-native-elements';
import * as env from '../../env';
// const deviceHeight = Dimensions.get('window').height;
// const deviceWidth = Dimensions.get('window').width;

const LectureVideo = ({navigation}) => {
  return (
    <ScrollView style={style.container}>
      {/* <MainHeader navigation={navigation} /> */}
      <View style={style.videoBox}>
        <YouTube
          apiKey={env.YOUTUBE_API_KEY}
          videoId={navigation.getParam('videoId')}
          style={{alignSelf: 'stretch', height: 270}}
        />
      </View>
      <Text style={style.title}>{navigation.getParam('title')}</Text>
      {/* <TouchableOpacity onPress= {()=> webComponent()}> */}
      <Text style={style.admin}>제작: 바울랩 </Text>
      {/* </TouchableOpacity> */}
      <Text style={style.body}>{navigation.getParam('desc')}</Text>
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
