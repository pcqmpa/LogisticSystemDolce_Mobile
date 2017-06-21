/**
 * Module with the app flow types.
 * @module src/utils/app-types
 * @flow
 */
// React - Redux.
import type { ContextRouter, Match } from 'react-router';
import type { Store, Dispatch } from 'redux';

// Constants.
import {
  CODE,
  OPTIONAL,
  PACKAGE,
  REQUIRED
} from '../constants/types';

//
// Global.
// -----------------------------------------------------------------------------
export type Noop = () => void;

export type ComputedProps = {
  [string]: string
};

export type AjaxOptions = {
  body?: string,
  headers?: any
};

export type AjaxRequest = {
  url: string,
  method?: string,
  options?: AjaxOptions
};

export type AjaxResponse = {
  originalEvent: any,
  request: any,
  response: any,
  responseType: string,
  status: number,
  xhr: XMLHttpRequest
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

// Styles.
// ===================================

export type Styles = Object;

export type StyleOptions = {
  alignContent?: string,
  color?: string,
  direction?: string,
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

export type OrderPictures = {
  code?: string,
  package?: string
};

export type Order = {
  delivered: boolean,
  error?: string,
  id?: string,
  IdTransportista?: number,
  NumPedido?: number,
  pictures?: OrderPictures,
  StrBarrio?: string,
  StrCapana?: string,
  StrCiudad?: string,
  StrDepartamento?: string,
  StrDireccion?: string,
  StrIdentificacion?: string,
  StrNombreAsesora?: string,
  StrPoblacion?: string,
  StrTelefono?: string,
  StrTipoEmpaque?: string,
  StrZona?: string,
  synced?: boolean
};

export type StorageError = {
  message: string,
  name: string
};

export type NotifyErrorOptions = {
  location: string
};

export type AuthenticateResult = {
  userData: User,
  wasOnStore: boolean
};

//
// Epics.
// -----------------------------------------------------------------------------
export type AuthResponse = {
  user: User,
  orders: Order[],
  token: string
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
  order: string | null,
  screenLoaded: boolean,
  toast: ToastState
};

// Login Form.
// ====================================
export type LoginState = {
  username: string,
  password: string
};

// Form Rules.
// ====================================
export type RuleType = OPTIONAL | REQUIRED;

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
export type PictureType = CODE | PACKAGE;

export type PictureState = {
  picture: string,
  pictureType: PictureType
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
  orderId: string,
  pictureType: string,
  picture: string
};

export type OrdersAction = {
  type: string,
  orders: Order[]
};

export type SubmitOrderAction = {
  type: string,
  numOrder: number
};

export type PictureAction = {
  type: string,
  picture: string,
  pictureType: PictureType
};

export type OrderDetailsAction = {
  type: string,
  orderId: string
};

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
export type SetOrder = (orderNama: )

// Form rules.
// ====================================
export type UpdateRules = (form: string, data: Resume) => FormRulesAction;

// Login Form.
// ====================================
export type UpdateLoginForm = (field: string, value: string) => LoginAction;

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
  screenLoaded: boolean,
  setScreenDefaultState: ActionCreator,
  showToast: ShowToast,
  updateRules: UpdateRules,
  user: User
};

export type ConfigScreenOptions = {
  isForm?: boolean
};

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

//
// Containers.
// -----------------------------------------------------------------------------

// Header Container.
// ====================================
export type HeaderContainerProps = {
  currentPath: string,
  logoutUser: ActionCreator,
  order: string,
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
  orders: Order[],
  push: RouterAction,
  setOrder
};
