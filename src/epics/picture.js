/**
 * Module with the epic to handle the taking pictures.
 * @module src/epics/picture
 * @flow
 */
// React.
import Camera from 'react-native-camera';
import { goBack, replace } from 'react-router-redux';

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
import {
  clearRetakePicture,
  setPictureUri
} from '../actions/picture-preview';

// Constants.
import { SHOT_PICTURE } from '../constants/actions';
import { ERROR } from '../constants/colors';
import {
  LOADING_PICTURE,
  PICTURE_SHOT_ERROR
} from '../constants/messages';
import { PICTURE_PREVIEW } from '../constants/screens';
import { SHOT_PICTURE_DELAY } from '../constants/values';

const pictureEpic$ = (action$: Observable<*>): Observable<*> => {
  return action$.ofType(SHOT_PICTURE)
    .switchMap((action: ShotPictureAction) => {
      const { cameraElement, retake } = action;
      const options = {
        orientation: Camera.constants.Orientation.portrait,
        target: Camera.constants.CaptureTarget.disk
      };
      return Observable.fromPromise(cameraElement.capture(options))
        .concatMap((data: PictureShot) => {
          const routerAction = (!retake)
            ? Observable.of(replace(PICTURE_PREVIEW))
            : Observable.of(goBack());

          return Observable.concat(
            Observable.of(
              setPictureUri(data.path),
              clearRetakePicture()
            ),
            routerAction,
            hideLoadingAction()
          ).delay(SHOT_PICTURE_DELAY);
        })
        .catch(() => (Observable.of(showToast(PICTURE_SHOT_ERROR, ERROR))))
        .startWith(showLoading(LOADING_PICTURE));
    });
};

export default pictureEpic$;
