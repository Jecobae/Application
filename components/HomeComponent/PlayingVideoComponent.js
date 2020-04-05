import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';
import palette from '../../style/palette';
import {normalize} from 'react-native-elements';
import AsyncStorageConfig from '../../lib/AsyncStorage';

const PlyingVideoComponents = ({navigation, bannerTitle, bannerDesc}) => {
  let [playingList, setPlayingList] = useState(null);
  const getPlayingList = async () => {
    // await AsyncStorageConfig.deleteStorage();
    setPlayingList(await AsyncStorageConfig.getStorage());
  };

  useEffect(() => {
    getPlayingList();
  }, [playingList]);
  playingList = JSON.parse(playingList);

  const renderVideo = ({item}) => (
    <TouchableHighlight
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate('LectureVideo', {
          videoId: item.videoId,
          title: item.title,
          img: item.img,
          desc: item.desc,
        })
      }
      underlayColor={palette.textColor}>
      <View style={style.container}>
        <View style={style.itemBox}>
          <Image
            source={{uri: `${item.img}`}}
            style={{width: 160, height: 90, resizeMode: 'cover'}}
          />
        </View>
        <View style={style.itemTitleBox}>
          <Text numberOfLines={2} style={style.title}>
            {item.title}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  return !playingList ? (
    <View style={style.bannerHeader}>
      <Text style={style.bannerTitle}>{bannerTitle}</Text>
      <Text style={style.date}>{bannerDesc}</Text>
    </View>
  ) : (
    <View style={style.bannerHeader}>
      <Text style={style.bannerTitle}>{bannerTitle}</Text>
      <Text style={style.date}>{bannerDesc}</Text>
      <FlatList
        data={playingList}
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
    paddingHorizontal: 5,
  },
  bannerTitle: {
    fontSize: normalize(17),
    fontWeight: 'bold',
    color: palette.backgroundColor,
  },
});

export default PlyingVideoComponents;
