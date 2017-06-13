/**
 * Module with the app storage initialization utility.
 * @module src/utils/storage
 */
// React.
import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';

const storage = new Storage({
  storageBackend: AsyncStorage
});

export default storage;
