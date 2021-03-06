/**
 * Module with the app messages.
 * @module src/constants/messages
 * @flow
 */
export const SESSION_EXPIRED = 'No hay sesión activa.';

export const SESSION_ACTIVE = 'Hay una sesión activa.';

export const AUTHENTICATION_ERROR = 'El usuario o contraseña son incorrectos.';

export const AUTHENTICATION_SUCCESS = 'Bienvenido!!';

export const SYSTEM_ERROR = 'Ha ocurrido un error en el sistema';

export const LOGOUT_SUCCESS = 'Lo esperamos nuevamente';

export const VALIDATION_ERROR = 'Uno de los campos es invalido o esta vacío.';

export const PICTURE_SHOT_ERROR = 'Surgió un error en el sistema mientras se tomaba la foto';

export const PICTURE_STORED = 'La foto se guardó correctamente';

export const UPDATE_STORAGE_ERROR = 'Un error ocurrió mientras se actualizaban los datos de la aplicación.';

export const ORDER_PARTIALLY_DELIVERED = 'No hay conexión a internet. El pedido se sincronizará una vez haya conexión';

export const ORDERS_SYNCED = 'Las pedidos se han sincronizado satisfactoriamente.';

export const ORDER_DELIVERED = 'El pedido ha sido entregado satisfactoriamente';

export const ORDER_NOT_DELIVERED_NOTIFIED = 'Se ha notificado que el pedido no fue entregado';

export const ORDERS_SYNC = (count: number): string => (`${count} pedidos fueron sincronizados.`);

export const ORDERS_UPDATED = 'Se actualizó la lista de pedidos.';

export const NO_ORDERS_TO_DELIVER = 'No hay pedidos disponibles.';

export const NO_ORDERS_WHERE_UPDATED = 'No hay nuevos pedidos en la lista';

// Loading Labels.
export const LOADING_ORDERS = 'Actualizando Pedidos...';

export const LOADING_PICTURE = 'Cargando foto...';

export const LOADING_PICTURE_STORAGE = 'Guardando foto...';

export const LOADING_SYNC = 'Sincronizando los pedidos...';

export const LOADING_SENDING = 'Enviando...';

// Debug messages.
export const BAD_ERROR_SOURCE = 'The source of the validation is incorrect.';
