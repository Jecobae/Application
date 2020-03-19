import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {normalize} from 'react-native-elements';
import Palette from '../style/palette';
import json from '../json/license';

const SheetMain = ({navigation}) => {
  const _renderItem = ({item}) => (
    <TouchableOpacity onPress={() => Linking.openURL(item.agreement)}>
      <View style={style.content}>
        <Text style={style.sheetName}>{item.name}</Text>
        <Text style={{color: '#a8a8a8'}}>{item.license}</Text>
      </View>
    </TouchableOpacity>
  );
  const DATA = Object.values(json.license);

  return (
    <View style={style.libBanner}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <_renderItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default SheetMain;

const style = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Palette.textColor,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
    borderWidth: 1,
    height: normalize(100),
    borderColor: Palette.borderColor,
    elevation: 5,
  },
  libBanner: {
    backgroundColor: Palette.textColor,
    paddingHorizontal: 15,
  },
  sheetName: {
    color: Palette.subTextColor,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: normalize(20),
  },
});
