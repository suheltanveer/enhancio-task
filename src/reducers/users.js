import { types } from "../actions/types";

const initialState = {
  users: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };

    case types.GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        users: []
      };

    case types.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.map(user => {
          if (action.payload.id === user.id) {
            user = Object.assign({}, user, action.payload);
          }
          return user;
        })
      };

    case types.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        users: []
      };
    default:
      return state;
  }
};
