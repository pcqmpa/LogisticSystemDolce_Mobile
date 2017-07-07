/**
 * Module with the picture storage epic that will handle
 * the storage of a picture taked with the camera.
 * @module src/epics/picture-storage
 * @flow
 */
// React.
import { ImageStore } from 'react-native';
import { goBack } from 'react-router-redux';

// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

// Types.
import type {
  AppState,
  ReduxStore
} from '../utils/app-types';

// Observables.
import { hideLoadingAction } from './common';
import streams from '../utils/streams';


// Actions.
import {
  showLoading,
  showToast,
  updateStore
} from '../actions/common';
import { addPictureToOrder } from '../actions/orders';

// Constants.
import { STORE_PICTURE } from '../constants/actions';
import { ERROR } from '../constants/colors';
import {
  LOADING_PICTURE_STORAGE,
  PICTURE_STORED,
  SYSTEM_ERROR
} from '../constants/messages';
import { TOAST_DISPLAY_DELAY } from '../constants/values';

// const pictureStorageEpic$ =
//   (action$: Observable<*>, store: ReduxStore): Observable<*> => {
//     return action$.ofType(STORE_PICTURE)
//       .switchMap((): Observable<*> => {
//         const { common, picturePreview }: AppState = store.getState();
//         return streams.imageToBase64(picturePreview.picture)
//           .concatMap((image: string): Observable<*> => {
//             const picture = `data:image/jpeg;base64,${image}`;
//             return Observable.concat(
//               Observable.of(
//                 addPictureToOrder(
//                   common.order,
//                   picturePreview.pictureType,
//                   picture
//                 ),
//                 goBack()
//               ),
//               hideLoadingAction(),
//               Observable.of(showToast(PICTURE_STORED))
//                 .delay(TOAST_DISPLAY_DELAY)
//             ).merge(Observable.of(updateStore()));
//           })
//           .catch(() => (Observable.of(showToast(SYSTEM_ERROR, ERROR))))
//           .startWith(showLoading(LOADING_PICTURE_STORAGE));
//       })
//       .catch((err: string) => (Observable.of(showToast(err, ERROR))));
//   };

const pictureStorageEpic$ =
  (action$: Observable<*>, store: ReduxStore): Observable<*> => {
    return action$.ofType(STORE_PICTURE)
      .switchMap((): Observable<*> => {
        const { common, picturePreview }: AppState = store.getState();
        return Observable.concat(
          Observable.of(
            addPictureToOrder(
              common.order,
              picturePreview.pictureType,
              picturePreview.picture
            ),
            goBack()
          ),
          Observable.of(updateStore()),
          hideLoadingAction(),
          Observable.of(showToast(PICTURE_STORED))
            .delay(TOAST_DISPLAY_DELAY)
        )
          .catch(() => (Observable.of(showToast(SYSTEM_ERROR, ERROR))))
          .startWith(showLoading(LOADING_PICTURE_STORAGE));
      })
      .catch((err: string) => (Observable.of(showToast(err, ERROR))));
  };

export default pictureStorageEpic$;
