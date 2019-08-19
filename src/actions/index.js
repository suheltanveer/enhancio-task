import { types } from "./types";
import axios from "axios";

const userTransformer = o => {
  const { login, id, avatar_url, repos_url, url } = o;
  return {
    id,
    login,
    avatar_url,
    url,
    repos_url
  };
};

const userInfoTransformer = o => {
  const { bio, email, location, name } = o;
  return {
    name,
    email,
    location,
    bio
  };
};

// const repoTransformer = o => {
//   const { stargazers_count, name, description } = o;
//   return {
//     name,
//     description,
//     stargazers_count
//   };
// };

// const fetchRepos = async url => {
//   try {
//     const response = await axios.get(url);
//     const repos = await response.data;
//     return repos.map(repoTransformer);
//   } catch (err) {
//     console.log("repos fetch error", err);
//     return err;
//   }
// };

const fetchUser = async url => {
  try {
    const response = await axios.get(url);
    const user = await response.data;
    return userInfoTransformer(user);
  } catch (err) {
    console.log("user data fetch error", err);
    return err;
  }
};

export const fetchUsers = () => async dispatch => {
  dispatch({
    type: types.GET_USERS_REQUEST
  });

  await axios
    .get("https://api.github.com/search/users?q=location:bangalore")
    .then(res => {
      // showing only first 10
      let users = res.data.items.slice(0, 10).map(userTransformer);

      //   fetch user info + highest starred repo from repos
      users.forEach(async user => {
        user.info = await fetchUser(user.url);
        // const repos = await fetchRepos(user.repos_url);
        // user.repo = repos.reduce(
        //   (highest, repo) => {
        //     if (repo.stargazers_count > highest.stargazers_count) {
        //       highest = repo;
        //     }
        //     return highest;
        //   },
        //   { stargazers_count: 0 }
        // );
      });

      dispatch({
        type: types.GET_USERS_SUCCESS,
        payload: users
      });
    })
    .catch(error => {
      dispatch({
        type: types.GET_USERS_FAILURE,
        payload: { error }
      });
    });
};

// https://api.github.com/search/repositories?q=location:bangalore&sort=stars&order=desc
