import { types } from "./types";
import axios from "axios";

export const fetchRepos = () => async dispatch => {
  // https://api.github.com/search/repositories?q=location:bangalore&sort=stars&order=desc
  await axios
    .get("https://api.github.com/search/users?q=location:bangalore")
    .then(res => {
      dispatch({
        type: types.GET_REPOS,
        payload: res.data.items.slice(0, 10)
      });
    })
    .catch(error => {
      //   console.log(error);
    });
};
