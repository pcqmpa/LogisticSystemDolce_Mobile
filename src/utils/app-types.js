/**
 * Module with the app flow types.
 * @module src/utils/app-types
 * @flow
 */
// React - Redux.
import type { ContextRouter, Match } from 'react-router';
import type { Store, Dispatch } from 'redux';

import type { Observable } from 'rxjs';

// Constants.
import {
  OrderStateEnum,
  PictureEnum,
  RuleEnum
} from '../constants/types';

//
// Global.
// -----------------------------------------------------------------------------
export type Noop = () => void;

export type ComputedProps = {
  [string]: string
};

export type CustomMap = {
  [any]: any
};

export type AjaxOptions = {
  body?: string | FormData,
  headers?: any
};

export type AjaxHeaders = {
  'Content-Type'?: string,
  ismobile: string,
  token?: string | null
};

export type AjaxRequest = {
  body?: any,
  headers?: any,
  method?: string,
  url?: string
};

export type AjaxResponse = {
  originalEvent: any,
  request: any,
  response: any,
  responseType: string,
  status: number,
  xhr: XMLHttpRequest
};

export type FetchResponse = {
  headers: { map: any },
  data: any,
  status: number,
  url: string
};

export type PictureDataObject = {
  uri?: string | null,
  type: string,
  name: string
};

export type OrderPictures = {
  code?: string | null,
  package?: string | null
};

export type User = {
  error?: string,
  id?: string,
  IdTipo?: number,
  IdUsuario?: number,
  isAuth?: boolean,
  LogEstado?: boolean,
  LogValido?: boolean,
  password?: string,
  StrMensaje?: string,
  StrNombre?: string,
  StrNombreTipoUsuario?: string,
  StrPassword?: string,
  StrUsuario?: string,
  token?: string | null,
  username?: string
};

export type OrderState = $Keys<typeof OrderStateEnum>;

export type Order = {
  Entregado?: boolean,
  error?: string,
  id?: string,
  Id?: number,
  IdTransportista?: number,
  IntCantidadPremio?: number,
  message?: string,
  NumNumeroPedido?: number,
  NumPedido?: number,
  pictures: OrderPictures,
  state?: OrderState,
  StrBarrio?: string,
  StrCapana?: string,
  StrCiudad?: string,
  StrDepartamento?: string,
  StrDescripcionPremio?: string,
  StrDireccion?: string,
  StrIdentificacion?: string,
  StrNombreAsesora?: string,
  StrPoblacion?: string,
  StrTelefono?: string,
  StrTipoEmpaque?: string,
  StrZona?: string,
  synced?: boolean
};

export type Zone = {
  orders: number,
  zoneId: string
};

export type CameraElement = {
  capture(options?: any): Promise<*>
};

export type StorageError = {
  message: string,
  name: string
};

export type NotifyErrorOptions = {
  location: string
};

export type ImageToBase64 = (image: string) => Observable<*>;

// Styles.
// ===================================

export type Styles = Object;

export type StyleOptions = {
  alignContent?: string,
  color?: string,
  direction?: string,
  disabled?: boolean,
  justifyContent?: string,
  size?: number
};

export type CookedStyles = {
  [string]: number[]
};

export type CookStylesOptions = {
  valid?: boolean
};

export type GridProps = {
  children: any,
  onPress(): void,
  size?: number,
  styles: number
};

//
// Epics.
// -----------------------------------------------------------------------------
export type AuthResponse = {
  user: User,
  orders: Order[],
  token: string
};

export type AuthenticateResult = {
  userData: User,
  wasOnStore: boolean
};

export type DeliverOrderData = {
  codePicture?: string | null,
  numOrder?: number,
  packagePiture?: string | null,
  orderType: string
};

export type DeliveryResponse = {
  message: string
};


//
// Reducers.
// -----------------------------------------------------------------------------

// Common.
// ====================================
export type LoadingState = {
  show: boolean,
  label: string
};

export type ToastState = {
  show: boolean,
  type: string | null,
  message: string
};

export type CommonState = {
  loading: LoadingState,
  order: number | null,
  screenLoaded: boolean,
  storeUpdated: boolean,
  toast: ToastState,
};

// Login Form.
// ====================================
export type LoginState = {
  username: string,
  password: string
};

// Form Rules.
// ====================================
export type RuleType = $Keys<typeof RuleEnum>;

export type Rule = {
  rule?: RuleType,
  type?: string,
  valid?: boolean
};

export type LoginFormRule = {
  username: Rule,
  password: Rule
};

export type FormRules = LoginFormRule;

export type FormRulesState = {
  loginForm: LoginFormRule
};

export type Rules = LoginFormRule;

export type Resume = {
  [string]: boolean
};

export type RulesData = {
  [string]: any
};

// Orders.
// ====================================
export type OrdersState = Order[];

// Picture Preview.
// ====================================
export type PictureType = $Keys<typeof PictureEnum>;

export type PictureState = {
  firstPreview: boolean,
  picture: string,
  pictureType: PictureType,
  retakePicture: boolean
};

// App.
// ====================================
export type AppState = {
  common: CommonState,
  formRules: FormRulesState,
  loginForm: LoginState,
  orders: OrdersState,
  picturePreview: PictureState,
  router: ContextRouter,
  user: User
};

//
// Actions.
// -----------------------------------------------------------------------------
export type Action = {
  type: string
};

export type HistoryAction = {
  type: string,
  path?: string
};

export type LoginAction = {
  type: string,
  field: string,
  value: string
};

export type LogoutAction = {
  type: string,
  message: string
};

export type UserAction = {
  type: string,
  data: User
};

export type ToastAction = {
  type: string,
  message: string,
  toastType: string | null
};

export type LoadinAction = {
  type: string,
  label: string
};

export type ClearRulesAction = {
  type: string,
  form: string
};

export type FormRulesAction = {
  type: string,
  form: string,
  data: Resume
};

export type OrderPictureAction = {
  type: string,
  numOrder: number | null,
  pictureType: string,
  picture: string
};

export type OrdersAction = {
  type: string,
  orders: Order[]
};

export type DeliverOrderAction = {
  type: string,
  order: Order
};

export type DeliverOrderSuccededAction = {
  type: string,
  numOrder: number
};

export type DeliverOrderPatiallyAction = {
  type: string,
  orderId: string
};

export type PictureAction = {
  type: string,
  picture: string,
  pictureType: PictureType
};

export type PictureTypeAction = {
  type: string,
  pictureType: PictureType
};

export type PictureUriAction = {
  type: string,
  pictureUri: string
};

export type ShotPictureAction = {
  type: string,
  cameraElement: CameraElement,
  retake: boolean
};

export type OrderDetailsAction = {
  type: string,
  order: number
};

export type OrderAction = {
  type: string,
  numOrder: number
};

export type OrderMessageAction = {
  type: string,
  orderId: string,
  message: string
};

export type LoadingLabelAction = {
  type: string,
  label: string
};

export type SyncedOrdersAction = {
  type: string,
  orderIds: string[]
}

//
// Actions Creators.
// -----------------------------------------------------------------------------

// Router.
// ====================================
export type RouterAction = (path: string | void) => HistoryAction;

// Common.
// ====================================
export type ActionCreator = () => Action;
export type ShowToast = (message: string, toastType: string) => ToastAction;
export type SetOrder = (order?: number) => OrderDetailsAction;

// User.
// ====================================
export type LogOut = (message: string) => LogoutAction;

// Form rules.
// ====================================
export type UpdateRules = (form: string, data: Resume) => FormRulesAction;

// Login Form.
// ====================================
export type UpdateLoginForm = (field: string, value: string) => LoginAction;

// Orders.
// ====================================
export type DeliverOrder = (order: Order) => DeliverOrderAction;

// Picture Preview.
// ====================================
export type SetPictureToPreview = (picture: string, pictureType: PictureType) => PictureAction;
export type SetPictureType = (pictureType: PictureType) => PictureTypeAction;
export type SetPictureUri = (pictureUri: string) => PictureUriAction;
export type ShotPicture = (cameraElement: CameraElement, retake: boolean) => ShotPictureAction;

// Not Delivered.
// ====================================
export type OrderMessage = (orderId: string, message: string) => OrderMessageAction;
export type OrderCreator = (numOrder: number) => OrderAction;

//
// Redux.
// -----------------------------------------------------------------------------
export type ReduxStore = Store<AppState, Action>;
export type ReduxDispatch = Dispatch<Action>;

//
// Libs.
// -----------------------------------------------------------------------------

// Validator.
// ====================================
export type RunMethod = (rules: Rules, data: RulesData, form: string) => boolean;
export type Validator = {
  run: RunMethod
};

//
// Component Props.
// -----------------------------------------------------------------------------

// Configure Screen.
// ====================================
export type ConfigScreenState = {
  fadeScreen: number
};

export type ConfigScreenProps = {
  match: Match,
  initCurrentScreen: ActionCreator,
  currentOrder: number,
  orders: Order[];
  screenLoaded: boolean,
  setOrder: SetOrder,
  setScreenDefaultState: ActionCreator,
  showToast: ShowToast,
  updateRules: UpdateRules,
  user: User
};

export type ConfigScreenOptions = {
  isForm?: boolean
};

export type ConfigScreenData = {
  order?: Order,
  changeDisabled?: boolean
};

// Divider.
// ====================================
export type DividerProps = {
  hide: boolean
}

// Toast.
// ====================================
export type ToastProps = {
  message: string,
  type: string
};

// Header.
// ====================================
export type HeaderIconProps = {
  icon?: string,
  onPress(): void,
  show?: boolean,
  styles?: number
};

export type HeaderProps = {
  backButton: HeaderIconProps,
  children: ReactElement<*>,
  hide: boolean,
  logoutIcon: HeaderIconProps,
  refreshIcon: HeaderIconProps
};

// Text Form.
// ====================================
export type TextFormProps = {
  containerStyles?: number,
  keyboardType?: string,
  multiline?: boolean,
  onChangeText(): void,
  placeholder?: string,
  placeholderTextColor?: string,
  returnKeyType?: string,
  secureTextEntry?: boolean,
  styles?: number,
  valid?: boolean,
  value?: string
};

// Card.
// ====================================
export type CardProps = {
  onPress(orderId: string | void): Noop,
  order: Order
};

// DataItem.
// ====================================
export type DataItemProps = {
  hide: boolean,
  keyText: string,
  valueText: string
};

// DataImage.
// ====================================
export type DataImageProps = {
  disabled: boolean,
  hasPicture: boolean,
  keyText: string,
  onPress: Noop,
  picture?: string
};

// ButtonIcon.
// ====================================
export type ButtonIconProps = {
  icon: string,
  iconStyle: number,
  onPress: Noop,
  style: number
};

// Button.
// ====================================
export type ButtonProps = {
  children: any,
  containerStyles: number,
  disabled: boolean,
  onPress(): void,
  size: number,
  textStyles: number,
  theme?: string
};

// Camera.
// ====================================
export type PictureShot = {
  mediaUri: string,
  path: string
};

// ListButton.
// ====================================
export type ListButtonProps = {
  onPress: Noop,
  text: string,
  title: string
};

//
// Containers.
// -----------------------------------------------------------------------------

// Header Container.
// ====================================
export type HeaderContainerProps = {
  clearPicturePreview: ActionCreator,
  currentPath: string,
  goBack: ActionCreator,
  logoutUser: LogOut,
  order: string,
  orders: Order[],
  requestOrders: ActionCreator,
  screenLoaded: boolean
};

// Toast Container.
// ====================================
export type ToastContainerProps = {
  message?: string,
  show?: boolean,
  type?: string
};

// Loading.
// ====================================
export type LoadingProps = {
  label?: string,
  show?: boolean
};

// Login.
// ====================================
export type LoginProps = {
  formRules: LoginFormRule,
  password: string,
  requestLogin: ActionCreator,
  username: string,
  updateLoginForm: UpdateLoginForm,
  validator: Validator
};

// Orders.
// ====================================
export type OrdersProps = {
  match: Match,
  orders: Order[],
  push: RouterAction
};

// Order Details.
// ====================================
export type OrderDetailsProps = {
  deliverOrder: DeliverOrder,
  match: Match,
  order: Order,
  push: RouterAction,
  replace: RouterAction,
  setPictureToPreview: SetPictureToPreview,
  setPictureType: SetPictureType
};

// Camera View.
// ====================================
export type CameraViewProps = {
  goBack: Noop,
  retake: boolean,
  shotPicture: ShotPicture
};

// Picture Preview.
// ====================================
export type PicturePreviewProps = {
  changeDisabled: boolean,
  clearPicturePreview: ActionCreator,
  firstPreview: boolean,
  goBack: RouterAction,
  picture: string,
  pictureType: PictureType,
  push: RouterAction,
  setRetakePicture: ActionCreator,
  storePicture: ActionCreator
};

// Zones.
// ====================================
export type ZonesProps = {
  push: RouterAction,
  zones: Zone[]
};

// Not Delivered.
// ====================================
export type NotDeliveredProps = {
  match: Match,
  notifyNotDeliveredOrder: OrderCreator,
  order: Order,
  replace: RouterAction,
  updateOrderMessage: OrderMessage
};
