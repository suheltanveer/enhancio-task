import { types } from "./types";
import axios from "axios";

const userTransformer = o => {
  const { login, id, avatar_url, html_url, url } = o;
  return {
    id,
    login,
    avatar_url,
    html_url,
    url
  };
};

const userInfoTransformer = o => {
  const { id, bio, email, location, name } = o;
  return {
    id,
    name,
    email,
    location,
    bio
  };
};

const fetchUsers = () => dispatch => {
  dispatch({
    type: types.GET_USERS_REQUEST
  });

  return axios
    .get("https://api.github.com/search/users?q=location:bangalore")
    .then(
      res => {
        dispatch({
          type: types.GET_USERS_SUCCESS,
          payload: res.data.items.slice(0, 10).map(userTransformer)
        });
      },
      error => {
        dispatch({
          type: types.GET_USERS_FAILURE,
          payload: { error }
        });
      }
    );
};

const fetchUser = url => dispatch => {
  dispatch({
    type: types.GET_USER_REQUEST
  });

  return axios.get(url).then(
    res => {
      dispatch({
        type: types.GET_USER_SUCCESS,
        payload: userInfoTransformer(res.data)
      });
    },
    error => {
      dispatch({
        type: types.GET_USER_FAILURE,
        payload: { error }
      });
    }
  );
};

export const getData = () => (dispatch, getState) => {
  return dispatch(fetchUsers()).then(() => {
    const users = getState().users.users;
    users.forEach(user => {
      dispatch(fetchUser(user.url));
    });
  });
};
