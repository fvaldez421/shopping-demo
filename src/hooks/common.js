import { useState } from "react";


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