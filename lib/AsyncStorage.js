import {useAsyncStorage} from '@react-native-community/async-storage';

const {getItem, setItem, removeItem} = useAsyncStorage('key');

const AsyncStorageConfig = {
  setStorage: async function(videoId, title, img, desc) {
    try {
      let item = {
        videoId: videoId,
        title: title,
        img: img,
        desc: desc,
      };

      let playingList = JSON.parse(await getItem()) || [];
      const unique = playingList.filter(play => play.videoId === item.videoId)
        .length;
      if (unique < 1) playingList.unshift(item);

      const maxSize = playingList.length;
      if (maxSize > 8) playingList.pop();

      setItem(JSON.stringify(playingList));
      return playingList;
    } catch (error) {
      console.log(error);
    }
  },

  getStorage: async function() {
    return await getItem();
  },

  deleteStorage: async function() {
    return await removeItem();
  },
};

export default AsyncStorageConfig;
