/**
 * Module with a series of serialization functions.
 * @module src/shared/utils/serializer
 */
// Node.
import jwt from 'jsonwebtoken';
import shortid from 'shortid';

// Constants.
import { TOKEN_SECRET } from '../constants/values';

/**
 * Serialize orders list to add requiered props.
 * @param {Array} orders -> The orders.
 * @returns {Array} -> With the serialized data.
 */
const toOnProgressOrders = orders => (
  orders
    .map(order => ({
      id: shortid.generate(),
      ...order,
      synced: false,
      pictures: [],
      isSubmitting: false,
      failed: false
    }))
);

/**
 * Serialize user object with its own secure token.
 * @param {Object} user -> The user object.
 * @returns {Object} -> The serialized object.
 */
const toLoggedUser = (user) => {
  const { username, password } = user;
  const tokenOptions = {
    username,
    password
  };

  const token = jwt.sign(tokenOptions, TOKEN_SECRET);

  return { ...user, token };
};

export default {
  toOnProgressOrders,
  toLoggedUser
};
