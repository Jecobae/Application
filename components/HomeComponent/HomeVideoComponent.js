import React, {useState, useEffect, useReducer} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {normalize} from 'react-native-elements';
import palette from '../../style/palette';
import DataCrawler from '../../lib/DataCrawler';

const HomeVideoComponent = ({
  navigation,
  playListId,
  bannerTitle,
  bannerDesc,
}) => {
  const [playList, setPlayList] = useState(null);
  const [plId] = useState(playListId);

  const _getPlayList = async () => {
    setPlayList(await DataCrawler(plId));
  };
  useEffect(() => {
    _getPlayList();
  }, []);

  const renderVideo = ({item: {title, img, desc, date, videoId}}) => (
    <TouchableHighlight
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate('LectureVideo', {
          videoId: videoId,
          title: title,
          img: img,
          desc: desc,
        })
      }
      underlayColor={palette.textColor}>
      <View style={style.container}>
        <View style={style.itemBox}>
          <Image
            source={{uri: `${img}`}}
            style={{width: 160, height: 90, resizeMode: 'cover'}}
          />
        </View>
        <View style={style.itemTitleBox}>
          <Text numberOfLines={2} style={style.title}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  return !playList ? (
    <View style={style.bannerHeader}>
      <Text style={style.bannerTitle}>{bannerTitle}</Text>
      <Text style={style.date}>{bannerDesc}</Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 20,
          flex: 1,
        }}>
        <ActivityIndicator size="large" />
      </View>
    </View>
  ) : (
    <View style={style.bannerHeader}>
      <Text style={style.bannerTitle}>{bannerTitle}</Text>
      <Text style={style.date}>{bannerDesc}</Text>
      <FlatList
        data={playList.videoInfo}
        renderItem={renderVideo}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemBox: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    marginTop: 10,
    marginLeft: 6,
  },
  title: {
    color: 'black',
    fontSize: normalize(10),
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: '#8e8e8e',
    fontSize: normalize(11),
  },
  itemTitleBox: {
    width: 150,
    paddingTop: 3,
    paddingHorizontal: 15,
  },
  bannerHeader: {
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 5,
  },
  bannerTitle: {
    fontSize: normalize(17),
    fontWeight: 'bold',
    color: palette.backgroundColor,
  },
});

export default HomeVideoComponent;
