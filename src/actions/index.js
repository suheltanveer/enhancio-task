import { types } from "./types";
import axios from "axios";

export const fetchUsers = () => async dispatch => {
  await axios
    .get("https://api.github.com/search/users?q=location:bangalore")
    .then(res => {
      // showing only first 10
      dispatch({
        type: types.GET_USERS,
        payload: res.data.items.slice(0, 10)
      });
    })
    .catch(error => {
      //   console.log(error);
    });
};

// https://api.github.com/search/repositories?q=location:bangalore&sort=stars&order=desc
