import { USER_DETAILS } from "./userTypes";

const initialState = {};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case USER_DETAILS:
      return {
        ...state,
        state: actions.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
