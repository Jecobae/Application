import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Image,
} from 'react-native';
import data from '../tool/data';
import Admob from '../Admob';
import {normalize} from 'react-native-elements';
import palette from '../../style/palette';

const SheetMain = ({navigation}) => {
  const _renderItem = ({item: {imglink, name, thumbnail}}) => (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate('Sheet', {
          name: name,
          imglink: imglink,
          thumbnail: thumbnail,
        })
      }
      underlayColor="white">
      <View style={style.content}>
        <Text style={style.sheetName}>{name}</Text>
        <Image source={{uri: `${thumbnail}`}} style={{width: 60, height: 60}} />
      </View>
    </TouchableHighlight>
  );
  const [SheetList, setSheetList] = useState('');
  const setSheet = async () => {
    setSheetList(await data('sheet'));
  };
  const DATA = Object.values(SheetList);
  useEffect(() => {
    setSheet();
  }, []);
  // eslint-disable-next-line no-undef
  return (
    <View style={style.container}>
      <Text style={style.title}>치트시트</Text>
      <FlatList
        data={DATA}
        renderItem={_renderItem}
        keyExtractor={item => item.name}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
        style={{marginBottom: 50}}
      />
      <View style={{flex: 1}}>
        <Admob />
      </View>
    </View>
  );
};
export default SheetMain;

const style = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#FFF',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: palette.borderColor,
    minWidth: '31%',
    height: 120,
    marginVertical: 4,
    marginHorizontal: 3,
    elevation: 5,
  },
  sheetName: {
    color: palette.subTextColor,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: normalize(13),
  },
  title: {
    paddingVertical: 10,
    paddingHorizontal: 17,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 5,
    fontSize: normalize(18),
  },
});
