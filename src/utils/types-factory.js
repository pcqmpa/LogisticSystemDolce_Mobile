/**
 * Module with the factory of types.
 * @module src/utils/types-factory
 * @flow
 */
// Types.
import type {
  DeliverOrderData,
  Order,
  OrderPictures
} from './app-types';

// Constants.
import { OrderStateEnum } from '../constants/types';

/**
 * Creates an empty order.
 */
export const createOrder = (): Order => {
  const pictures: OrderPictures = { code: '', package: '' };
  const order: Order = {
    Entregado: false,
    error: '',
    id: '',
    Id: 0,
    IdTransportista: 0,
    message: '',
    NumNumeroPedido: 0,
    NumPedido: 0,
    pictures,
    state: OrderStateEnum.OPEN,
    StrBarrio: '',
    StrCapana: '',
    StrCiudad: '',
    StrDepartamento: '',
    StrDireccion: '',
    StrIdentificacion: '',
    StrNombreAsesora: '',
    StrPoblacion: '',
    StrTelefono: '',
    StrTipoEmpaque: '',
    StrZona: '',
    synced: false
  };

  return order;
};

/**
 * Creates a delivery order object.
 */
// export const createDeliverOrderData = (data: DeliverOrderData): DeliverOrderData => {
//   const orderData: DeliverOrderData = {
    
//   };

//   return 
// };
