import { useReducer } from "react";

const INITIAL_STATE = {
  user: null,
};

const useReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};
