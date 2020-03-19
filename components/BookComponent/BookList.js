import React, { Fragment } from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import data from '../tool/data';
import Admob from '../Admob';

const _renderItem = ({item}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.imgcontainer}
        onPress={() => Linking.openURL(item.link)}>
        <Image style={style.bookimg} source={{uri: item.image}} />
      </TouchableOpacity>
      
      {/* <Text style={style.tail}>이미지를 클릭하면 사이트로 이동합니다</Text> */}
        <Text style={style.bookname}>{item.name}</Text>
    </View>
  );
};

export default function BookList() {
  const [booklist, setbooklist] = useState('');
  const setbook = async () => {
    setbooklist(await data('booklist'));
  };
  const DATA = Object.values(booklist);

  useEffect(() => {
    setbook();
  }, []);
  return (
    <View style={{flex:1, backgroundColor:'#FFF'}}>
      <View style={{flex:5}}>
        <FlatList
          // horizontal={true}
          data={DATA}
          numColumns={2}
          renderItem={_renderItem}
          keyExtractor={item => item.name}
          />
        </View>
        <Admob/>
      </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor:'#FFF',
    flex: 1,
    // flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent:'center'
  },
  imgcontainer: {
    marginTop:30,
    flex: 5,
    width: '100%',
    height:'90%',
    flexWrap: 'wrap',
    alignItems: 'center',
    // paddingHorizontal: 3,
  },
  decContainer: {
    flex: 1,
    width: 330,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
    // borderWidth: 0.3,
    // borderColor: '#BCBCBC',
    marginTop: 10,
    // marginBottom: 50,
    marginHorizontal: 10,
  },
  bookimg: {
    height: 220,
    width: '100%',
    // borderColor: '#BCBCBC',
    // borderWidth: 0.3,
    resizeMode: 'contain',
  },
  bookname: {
    flex: 1,
    width:'75%',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 15,
  },
  tail: {
    fontStyle: 'italic',
    color: '#DCDCDC',
  },
});
