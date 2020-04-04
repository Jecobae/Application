import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import palette from '../../style/palette';
import category from '../../json/category';
import {normalize} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

const categoryList = Object.values(category.lecture);

const Category = ({navigation}) => {
  const renderList = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('LectureList', {
          plId: item.id,
          lecture: item.name,
        })
      }>
      <View style={style.banner}>
        <View style={style.imgBox}>
          <Image source={{uri: `${item.img}`}} style={style.img} />
        </View>
        <View>
          <Text style={style.bannerTitle}>{item.name}</Text>
          <Text style={style.bannerExplain}>{item.explain}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <ScrollView style={style.container}>
      <Text style={style.title}>카테고리</Text>
      <FlatList
        data={categoryList}
        renderItem={renderList}
        keyExtractor={item => item.name}
        showsHorizontalScrollIndicator={false}
        controls={1}
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: normalize(15),
    fontWeight: 'bold',
    marginLeft: 5,
    marginVertical: 8,
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: palette.mainColor,
    borderColor: palette.mainColor,
    borderWidth: 0.4,
    borderRadius: 15,
    marginVertical: 5,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  imgBox: {
    width: 56,
    height: 55,
    backgroundColor: '#FFFFFF',
    borderColor: palette.mainColor,
    borderRadius: 50,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: normalize(15),
    fontWeight: 'bold',
    color: palette.textColor,
  },
  bannerExplain: {
    color: '#a5d5cb',
    lineHeight: normalize(15),
    fontSize: normalize(9),
  },
  img: {
    width: 40,
    height: 40,
  },
});

export default Category;
