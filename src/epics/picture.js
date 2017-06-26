/**
 * Module with the epic to handle the taking pictures.
 * @module src/epics/picture
 * @flow
 */
// React.
import Camera from 'react-native-camera';
import { replace } from 'react-router-redux';

// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

// Types.
import type {
  PictureShot,
  ShotPictureAction
} from '../utils/app-types';

// Observables.
import { hideLoadingAction } from './common';

// Actions.
import { showLoading, showToast } from '../actions/common';
import { setPictureUri } from '../actions/picture-preview';

// Constants.
import { SHOT_PICTURE } from '../constants/actions';
import { ERROR } from '../constants/colors';
import { PICTURE_SHOT_ERROR } from '../constants/messages';
import { PICTURE_PREVIEW } from '../constants/screens';
import { SHOT_PICTURE_DELAY } from '../constants/values';

const pictureEpic = (action$: Observable<*>): Observable<*> => {
  return action$.ofType(SHOT_PICTURE)
    .switchMap((action: ShotPictureAction) => {
      const { cameraElement } = action;
      const options = {
        target: Camera.constants.CaptureTarget.temp
      };
      return Observable.fromPromise(cameraElement.capture(options))
        .concatMap((data: PictureShot) => {
          return Observable.concat(
            Observable.of(
              setPictureUri(data.path),
              replace(PICTURE_PREVIEW)
            ),
            hideLoadingAction()
          ).delay(SHOT_PICTURE_DELAY);
        })
        .catch(() => (Observable.of(showToast(PICTURE_SHOT_ERROR, ERROR))))
        .startWith(showLoading());
    })
};

export default pictureEpic;
