import { useState } from "react";


/**
 * Compound state hook, used for semi complex states. For any needs requiring 
 * nesting, consider creating other hooks with reducers.
 * @param {Object}   [initialState] initial state provided 
 * @param {Function} [cb]           callback to be fired with updated state
 */
export const useCompound = (initialState={}, cb=null) => {
  const [state, updateState] = useState({ ...initialState });
  const setState = (updates={}) => {
    let updatedState = state;
    updateState(state => {
      updatedState = { ...state, ...updates };
      return updatedState;
    });
    if (cb) cb(updatedState);
  };
  return {
    state,
    setState
  }
}