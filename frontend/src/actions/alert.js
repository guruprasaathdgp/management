// src/actions/alert.js
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = Math.random().toString(36).substring(7); // generate a random ID
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export const removeAlert = id => dispatch => {
  dispatch({
    type: REMOVE_ALERT,
    payload: id
  });
};
