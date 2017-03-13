/**
 * Module with the app storage utility.
 * @module src/utils/storage
 */
// React Native.
import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';

const storage = new Storage({
  storageBackend: AsyncStorage
});

export default storage;
